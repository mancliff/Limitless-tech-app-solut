import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  @ViewChild('TabId') tabs: IonTabs;

  constructor() { }

  ngOnInit() {
  }

  _ionTabsDidChange(event){
    console.log("_ionTabsDidChange", event);
    console.log(this.tabs.getSelected())
  }

  _ionTabsWillChange(event){
    console.log("_ionTabsWillChange", event);
    console.log(this.tabs.getSelected())
  }

  _goToTab(){
    this.tabs.select('tab2')
  }
}
