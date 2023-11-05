import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
@Component({
 selector: 'app-details',
 standalone: true,
 imports: [
 CommonModule
 ],
 template: `
 <article>
 <img class="listing-photo" [src]="housingLocation?.photo"
 alt="Exterior photo of {{housingLocation?.name}}"/>
 <section class="listing-description">
 <h2 class="listing-heading">{{housingLocation?.name}}</h2>
 <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
 </section>
 <section class="listing-features">
 <h2 class="section-heading">About this Mall</h2>
 <ul>
 
 <li>wifi: {{housingLocation?.wifi}}</li>
 <li>No of Shops: {{housingLocation?.noofshops}}</li>
 <li>Rating: {{housingLocation?.rating}}</li>
 </ul>
 </section>
 </article>
 `,
 styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
 route: ActivatedRoute = inject(ActivatedRoute);
 housingService = inject(HousingService);
 housingLocation: HousingLocation | undefined;
 constructor() {
 const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
 this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
 }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/