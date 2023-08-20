import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nov-prod',
  templateUrl: './nov-prod.component.html',
  styleUrls: ['./nov-prod.component.css']
})
export class NovProdComponent implements OnInit {

  router: Router;

  constructor(router: Router) { this.router = router; }
 
  incluir():void{
  this.router.navigateByUrl("/produto")
  }
  ngOnInit(): void { }

}
