
import http, { IncomingMessage, ServerResponse } from 'http';


class Router {
  private routes: Record<string, (req: IncomingMessage, res: ServerResponse) => void> = {};

  // handle GET requests
  get(path: string, handler: (req: IncomingMessage, res: ServerResponse) => void): void 
  {
    this.routes[`GET ${path}`] = handler;
  }

  //handle POST requests
  post(path: string, handler: (req: IncomingMessage, res: ServerResponse) => void): void 
  {
    this.routes[`POST ${path}`] = handler;
  }

  //start the server
  listen(port: number): void 
  {
    const server = http.createServer((req, res) => {
      const handler = this.routes[`${req.method} ${req.url}`];
      if (handler) {
        handler(req, res);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
    });

    server.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
}


export { Router };
