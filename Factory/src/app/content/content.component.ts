import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  projectMenu =['View All', 'Agriculture', 'Chemical', 'Materials', 'Mechanical', 'Power & Energy',]

  why_content_title = ['30 Year of Experience',
                        'Licence & Insured',
                        'Honest & Dependable',
                        
                      ];
  why_content_des = ['The great explorer the truth, the sed master builder human happiness one rejects, dislikes pleasure',
                      'Must explain to you how this mist aken idea deno uncing pleasure, pra ising pain was complete',
                      'Denouncing pleasure and praising pain was born and I will give you a complete, great explorer.',
                      
                    ];

why_content_title1 = ['Award Winning',
                    '800+ Sucessful Project',
                    'Professional Workers',
                    
                  ];
why_content_des1 = ['Complete account of the system, and expound the actual teachings of the great explorer of the truth.',
                  'Master builder of human happiness no one rejects, dislikes, or avoids pleasure itself.',
                  'Know how to pursue pleasure explain tconsequences that are ut extremely seds consequences.',
                  
                ];
  constructor() { }

  ngOnInit() {
  }

}
