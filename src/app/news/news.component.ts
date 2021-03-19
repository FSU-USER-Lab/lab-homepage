import { Component, OnInit } from '@angular/core';
import newsData from '../../assets/news.json';

interface NewsItem {
  title: String;
  date: String;
  content: String;
}


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  news: NewsItem[] = newsData;
  //news = 

}
