import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent  {
    name: string;
    email: string;
    address: address;
    pincode: string;
    hobbies: string[];
    showHobbies:boolean;
    posts:Post[];

    constructor(private postsService: PostsService){
        this.name = 'Anubhav'; 
        this.email = 'anubhavsharma960@gmail.com'
        this.pincode = '173212'
        this.address = {
            street: 'Palace Road,',
            city:'Solan,',
            state: 'HP'
    }
    this.hobbies=[' Designing',' Basketball',' Music'];
    this.showHobbies= false;

    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
    });
    }
    toggleHobbies(){
        if(this.showHobbies == true){
            this.showHobbies=false;    
        } else {
        this.showHobbies=true;
        }
    }
    addHobby(hobby){
        this.hobbies.push(hobby);
    }
    deleteHobby(i){
        this.hobbies.splice(i,1);
    }

}
interface address {
    street: string;
    city: string;
    state: string;
}

interface Post{
    id:number;
    title: string;
    body: string;
}