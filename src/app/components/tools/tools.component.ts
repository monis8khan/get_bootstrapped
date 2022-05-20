import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/services/tools.service';
import { Tools } from 'src/app/interfaces/tools';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  toolList: Tools[] = [];
  constructor(private ts: ToolsService) { }

  ngOnInit(): void {
    this.toolList = this.ts.getToolsList();
  }

}
