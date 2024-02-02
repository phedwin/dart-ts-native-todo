

interface session
{
    sessionID : string,
    sessionName : string,
    destroySession():void,
    retrieveSession():[]
}

export { session }