import { Injectable } from '@angular/core';
import { Medium } from './shared/medium.interface';

@Injectable({
  providedIn: 'root'
})
export class MediumService {
  mediumdata:Medium[]=[{
    src:"https://dummyimage.com/850x350/dee2e6/6c757d.jpg" ,
    date:"14/05/22",
    title:"hello",
    shortDescription: "HMV creates a sense of urgency in potential attendees by referencing the event capacity. They also use FOMO (Fear Of Missing Out) a phenomenon common amongst millennials.  “Big Sean will at the hmv Underground at 333 Yonge Street on March 24 2015 at 5:00 PM for an exclusive FAN MEET & GREET. Space is limited to the first 300 fans on a first come first served basis (as per the event protocol)”  What tactics do you use when writing event descriptions? Link to your event and show us your best work or let us know on Twitter!"},
    {
      src:"https://dummyimage.com/850x350/dee2e6/6c757d.jpg" ,
      date:"14/05/22",
      title:"hello",
      shortDescription: "HMV creates a sense of urgency in potential attendees by referencing the event capacity. They also use FOMO (Fear Of Missing Out) a phenomenon common amongst millennials.  “Big Sean will at the hmv Underground at 333 Yonge Street on March 24 2015 at 5:00 PM for an exclusive FAN MEET & GREET. Space is limited to the first 300 fans on a first come first served basis (as per the event protocol)”  What tactics do you use when writing event descriptions? Link to your event and show us your best work or let us know on Twitter!"},
      {
        src:"https://dummyimage.com/850x350/dee2e6/6c757d.jpg" ,
        date:"14/05/22",
        title:"hello",
        shortDescription: "HMV creates a sense of urgency in potential attendees by referencing the event capacity. They also use FOMO (Fear Of Missing Out) a phenomenon common amongst millennials.  “Big Sean will at the hmv Underground at 333 Yonge Street on March 24 2015 at 5:00 PM for an exclusive FAN MEET & GREET. Space is limited to the first 300 fans on a first come first served basis (as per the event protocol)”  What tactics do you use when writing event descriptions? Link to your event and show us your best work or let us know on Twitter!"},
        {
          src:"https://dummyimage.com/850x350/dee2e6/6c757d.jpg" ,
          date:"14/05/22",
          title:"hello",
          shortDescription: "HMV creates a sense of urgency in potential attendees by referencing the event capacity. They also use FOMO (Fear Of Missing Out) a phenomenon common amongst millennials.  “Big Sean will at the hmv Underground at 333 Yonge Street on March 24 2015 at 5:00 PM for an exclusive FAN MEET & GREET. Space is limited to the first 300 fans on a first come first served basis (as per the event protocol)”  What tactics do you use when writing event descriptions? Link to your event and show us your best work or let us know on Twitter!"},
  ]
  medium!:Medium[];

  constructor() { }
  fetchProducts():Medium[]{
    console.log("fetching from product service");

    return this.mediumdata;
  }
}

