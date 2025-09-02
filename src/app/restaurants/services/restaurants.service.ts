import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from '../models/restaurant-model';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  private apiUrl = 'https://bb5adb0eb461.ngrok-free.app/api/restaurant';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<any[]>(this.apiUrl, {
      headers: { 'ngrok-skip-browser-warning': 'true' }
    }).pipe(
      map(data => data.map(item => ({
        restId: item.restId,
        name: item.name,
        cuisine: item.cuisine,
        address: item.address,
        opentime: item.openTime,  
        closetime: item.closeTime,
        image: item.imgUrl
      } as Restaurant)))
    
  );
}

}

