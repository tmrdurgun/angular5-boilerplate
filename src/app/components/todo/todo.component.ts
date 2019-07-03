import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todos: any;
  constructor(private httpService: HttpService) { }

  public async ngOnInit() {
    await this.getTodoList();
  }

  public async getTodoList(): Promise<any> {
    return this.httpService.get('/todos').subscribe(
      res => {
        this.todos = res;
      }
    );
  }

}
