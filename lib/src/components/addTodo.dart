

// ignore_for_file: file_names

// ignore: camel_case_types
class Todos {
  var todo =  "";
  final bool completed;
  Todos(this.todo, {this.completed = false});
}

void showBool()
{
  var status = Todos("todo");
  print(status.completed);
}