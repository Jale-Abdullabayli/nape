import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private title: Title,public router: Router) {
   }
  
  ngOnInit(): void {
    this.title.setTitle('PROJECTS > NEP Engineering');
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });

  
  $(".page-item").on("click",function(){
    $(".activeLink").removeClass("activeLink");
    $(this).addClass("activeLink");
    $(".disableArrow").removeClass("disableArrow");
    if($(this).index()==4)
    {
      $(".next").addClass("disableArrow");
    }if($(this).index()==1)
    {
      $(".prev").addClass("disableArrow");
    }
  });

  const that = this;
  $(".prev").on("click",function(){
    $(".disableArrow").removeClass("disableArrow");
    var $activeLi=$(".activeLink");
    if($activeLi.index()==2)
    {
      $(this).addClass("disableArrow");
    }
    $activeLi.removeClass("activeLink");
    $activeLi.prev().addClass("activeLink");  
    var $routerLi=$activeLi.prev().attr("routerLink");
   that.router.navigate([$routerLi]);
  })

  $(".next").on("click",function(){
    $(".disableArrow").removeClass("disableArrow");
    var $activeLi=$(".activeLink");
    if($activeLi.index()==3)
{
  $(this).addClass("disableArrow");
}
    $activeLi.removeClass("activeLink");
    $activeLi.next().addClass("activeLink");
    var $routerLi=$activeLi.next().attr("routerLink");
    that.router.navigate([$routerLi]);
  })

  }

}
