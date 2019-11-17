import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { ExplorePage } from '../explore/explore';
import { SearchPage } from '../search/search';
import { QuestionsPage } from '../questions/questions';
import { NotificationsPage } from '../notifications/notifications';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  tab5: any;

  constructor() {
    this.tab1 = ExplorePage;
    this.tab2 = SearchPage;
    this.tab3 = QuestionsPage;
    this.tab4 = NotificationsPage;
    this.tab5 = ProfilePage;
  }
}
