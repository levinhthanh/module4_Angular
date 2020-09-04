import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hacker-news',
  templateUrl: './hacker-news.component.html',
  styleUrls: ['./hacker-news.component.css']
})
export class HackerNewsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  add_article:boolean = false;
  url:string = "";
  title:string = "";

  articles = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];

  // updateArticle() {
  //   this.article.title = document.getElementById('article-title').value;
  //   this.article.url = document.getElementById('article-url').value;
  // }

  showAdd(){
      this.add_article = true;
  }

  addArticle(){
      if(this.title != "" && this.url != ""){
           this.articles.push({
             title: this.title,
             url: this.url
           });
           this.url = "";
           this.title = "";
           this.add_article = false;
      }
  }
}