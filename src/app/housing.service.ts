import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
@Injectable({
 providedIn: 'root'
})
export class HousingService {
 readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
 protected housingLocationList: HousingLocation[] = [
 {
 id: 0,
 name: 'Mall of America',
 city: 'Minnesota',
 state: 'United States',
 photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdq9Dlf-R79kTdHVXMegrSofI4QECY12ikOzJ0dJg-0I3CRq0IToObtuI3ahA0N0SgQA&usqp=CAU`,
 wifi: true,
 noofshops: 150,
 rating: 5,
 },
 {
 id: 1,
 name: 'West Edmonton Mall',
 city: 'Alberta',
 state: 'Canada',
 photo: `https://di-uploads-pod13.dealerinspire.com/westedmontonvolkswagen/uploads/2023/02/2.png`,
 wifi: true,
 noofshops: 95,
 rating: 5,
 },
 {
 id: 2,
 name: 'Dubai Mall',
 city: 'Dubai',
 state: 'United Arab Emirates',
 photo: `https://www.iainmasterton.com/img-get2/I00002C9BJAKdr4c/fit=1000x750/RX14683.jpg`,
 wifi: true,
 noofshops: 75,
 rating: 4,
 },
 {
 id: 3,
 name: 'Ala Moana',
 city: 'Honolulu',
 state: 'Hawaii',
 photo: `https://www.khon2.com/wp-content/uploads/sites/8/2022/08/Untitled-design-10.jpg?strip=1`,
 wifi: true,
 noofshops: 60,
 rating: 4,
 },
 {
 id: 4,
 name: 'Siam Paragon mall',
 city: 'Bankok',
 state: 'Thailand',
 photo: `https://previews.123rf.com/images/s4svisuals/s4svisuals1910/s4svisuals191000663/132891638-siam-paragon-mall-in-bangkok.jpg`,
 wifi: true,
 noofshops: 55,
 rating: 3,
 },
 {
 id: 5,
 name: 'Mall of the Emirates',
 city: 'Dubai',
 state: 'United Arab Emirates',
 photo: `https://www.visitdubai.com/-/media/gathercontent/poi/t/the-dubai-mall/fallback-image/the-dubai-mall-poi-shutterstock.jpg`,
 wifi: true,
 noofshops: 50,
 rating: 3,
 },
 {
 id: 6,
 name: 'Villagio Mall',
 city: 'Doha',
 state: 'Qatar',
 photo: `https://c.myholidays.com/blog/blog/content/images/2020/11/shutterstock_1679383660.jpg`,
 wifi: true,
 noofshops: 45,
 rating: 3,
 },
 {
 id: 7,
 name: 'Gallerio vittorio Emmanuele',
 city: 'Milan',
 state: 'Italy',
 photo: `https://www.thetrainline.com/cms/media/5873/italy-milan-galleria-vittorio-emanuele-ii.jpg`,
 wifi: true,
 noofshops: 25,
 rating: 4,
 },
 {
 id: 8,
 name: 'Berjaya Times Square Mall',
 city: 'Kuala Lumpur',
 state: 'Malasiya',
 photo: `https://pix10.agoda.net/hotelImages/47790/0/56a81fb939b02065f28f351785f58962.jpg?ca=0&ce=1&s=414x232`,
 wifi: true,
 noofshops: 25,
 rating: 4,
 },
 {
 id: 9,
 name: 'Lulu International Shopping Mall',
 city: 'Kochi',
 state: 'India',
 photo: `https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lulukeralattri.jpg/1422px-Mapcarta.jpg`,
 wifi: true,
 noofshops: 25,
 rating: 4,
 }
 ];
 getAllHousingLocations(): HousingLocation[] {
 return this.housingLocationList;
 }
 getHousingLocationById(id: number): HousingLocation | undefined {
 return this.housingLocationList.find(housingLocation => housingLocation.id === id);
 }
 submitApplication(firstName: string, lastName: string, email: string) {
 console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
 }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/