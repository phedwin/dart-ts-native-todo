

import 'dart:html';

void listMergeLoopsWithModulo() {
  List <int> lists = [23,46,5,6,76,7,45,4,545,5];

  List <int> addHere = [];
  //we want to add all the nums that are divisible by two to add here
  var word = "hello world";
  print(lists.map((e) => e % 2 == 0 && addHere.length > 1 ? addHere.add(e) : []));
  for (var i = 0; i < lists.length; i++) {
    if(lists[i] % 2 == 0)
    {
      addHere.add(lists[i]);
      lists.removeAt(i); 
    }
  }
  print(word);
  
  var worker = Worker("http://localhost:8000");
  print(worker.toString());
}