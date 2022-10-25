import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  bannerDetail = ['Industry Plus đã liên tục chấp nhận sự đổi mới để cung cấp một mức độ xuất sắc vượt trội.', 
                  'We import & export good brought into a jurisdiction, especially across a national',
                  'Industry Plus has consistently embraced innovation to provide a superior.']
  bannerInput ='';
  
  constructor() { }

  ngOnInit() {
    this.bannerInput = this.bannerDetail[0];
    let count = 1;
      setInterval(() => {
        if(this.bannerDetail.length > count){
            this.bannerInput = this.bannerDetail[count];
            count++;
        }else{
          count = 0;
        }
      },5000)
  }

}
