import { Component, ContentChild, ViewChild } from '@angular/core';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing_app';

  @ViewChild(ContentComponent)
    private content:ContentComponent;
    uName:string;
    uPwd:string;
  
  submit(){
    alert("UserName: "+ this.content.username);
    alert("Password: "+ this.content.password);
this.uName=this.content.username;

  }
}
