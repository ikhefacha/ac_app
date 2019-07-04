import { Component } from '@angular/core';
import {BooklistPage} from "../booklist/booklist";
import {CdlistPage} from "../cdlist/cdlist";

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  booklist = BooklistPage;
  cdlist = CdlistPage;
}
