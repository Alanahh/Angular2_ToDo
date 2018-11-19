import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';

class Item{
  note: string;
  done: boolean;
  
   
  constructor(note: string) {

      this.note = note;
      this.done = false;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = "";
  items: Item[] = 
  [
      { note: "Хлеб", done: false},
      { note: "Масло", done: false}
  ];
  addItem(text: string): void {
       console.log(this.text)
      if(text==null || text.trim()=="")
          return;
      this.items.push(new Item(text));
  }
  deleteToDo(index){

  this.items.splice(index, 1);

}
changeToDo(index){
  var val = this.items.splice(index, 1);
  console.log(val)

     this.text = val[0].note;
    console.log(this.text);
    // document.getElementById("myForm").value = newNote;
    
  }
}
  

