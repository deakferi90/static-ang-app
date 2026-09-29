import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage implements OnInit {
  props: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('data.json').subscribe((data) => {
      this.props = data;
      console.log(this.props);
    });
  }
}
