import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Task, Priority } from './Task';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  @ViewChild('modal') model: ElementRef | undefined;
  taskObject: Task = new Task();
  taskList: Task[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem('localItem');
    if (localData != null) {
      this.taskList = JSON.parse(localData);
    }
  }

  openModel() {
    const model = document.getElementById('modal');
    if (model != null) {
      model.style.display = 'block';
    }
  }

  closeModel() {
    this.taskObject = new Task();
    if (this.model != null) {
      this.model.nativeElement.style.display = 'none';
    }
  }

  onDelete(item: Task) {
    const currentRecord = this.taskList.findIndex(
      (m) => m.uid === this.taskObject.uid
    );
    this.taskList.splice(currentRecord, 1);
    localStorage.setItem('localItem', JSON.stringify(this.taskList));
  }

  onEdit(item: Task) {
    this.taskObject = item;
    this.openModel();
  }

  updateTask() {
    const currentRecord = this.taskList.find(
      (m) => m.uid === this.taskObject.uid
    );

    if (currentRecord != undefined) {
      currentRecord.name = this.taskObject.name;
      currentRecord.description = this.taskObject.description;
      currentRecord.priority = this.taskObject.priority;
    }
    localStorage.setItem('localItem', JSON.stringify(this.taskList));
    this.closeModel();
  }

  saveTask() {

    const isLocalPresent = localStorage.getItem('localItem');
    if (isLocalPresent != null) {
      const oldArray = JSON.parse(isLocalPresent);
      this.taskObject.uid = oldArray.length + 1;
      oldArray.push(this.taskObject);
      this.taskList = oldArray;
      localStorage.setItem('localItem', JSON.stringify(oldArray));
    } else {
      const newArr = [];
      newArr.push(this.taskObject);
      this.taskObject.uid = 1;
      this.taskList = newArr;
      localStorage.setItem('localItem', JSON.stringify(newArr));
    }

    this.closeModel();
  }

  prio = Priority;
}