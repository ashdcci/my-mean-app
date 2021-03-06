import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  constructor(private PostsService: PostsService) { }

  ngOnInit() {

    // retrive post from api

    this.PostsService.getAllPosts().subscribe(posts =>{
        this.posts = posts;
    });
  }

}
