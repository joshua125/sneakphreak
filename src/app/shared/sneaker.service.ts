import {sneaker} from '../models/sneaker.model';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class sneakerService {

    private sneakers: sneaker[] = [
        // new sneaker("8765656","airmax", 200, "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/0/5/050358_01.jpg"),
        // new sneaker("123234", "Retro3s", 350, "https://www.flightclub.com/media/catalog/product/0/1/012588_1.jpg"),
        // new sneaker("232131","lebrons", 150, "https://sneakernews.com/wp-content/uploads/2018/09/nike-lebron-3-ctk-christ-the-king-BQ2444-100-2.jpg?w=1140")
      ]

    private sneakerCatalogUpdated = new Subject<sneaker[]>();

    constructor(private httpClient: HttpClient, private router: Router){}

      getSneakers(){
          this.httpClient
            .get<{message: string, catalog: any }>(
                'http://localhost:3000/api/catalog'
            ).pipe(map((catalogData)=>{
                return catalogData.catalog.map(sneak=>{
                    return {
                       id: sneak._id,
                       name: sneak.name,
                       price: sneak.price,
                       image: sneak.image,
                       
                    }
                })
            }))
                .subscribe(
              (pipedCatalog)=>{
                this.sneakers = pipedCatalog;
                this.sneakerCatalogUpdated.next([...this.sneakers])
              })
      }

      getSneakerListener(){
          return this.sneakerCatalogUpdated.asObservable();
      }

      addSneakers(name: string, price: number, image: string){
          const sneakers = new sneaker(name, price, image)
          this.httpClient.post<{message: string, sneakID: string}>('http://localhost:3000/api/catalog', 
            sneakers).subscribe((responseData)=>{
                const sneakID = responseData.sneakID;
                sneakers.id = sneakID;
                console.log(responseData.message)
                this.sneakers.push(sneakers)
                this.sneakerCatalogUpdated.next([...this.sneakers]);
            })
            this.router.navigate(["/"]);

      }

      getSneaker(id: string){
          return this.sneakers.find(s=> s.id === id)
      }
      

      deleteSneaker(sneakerID: string){
          this.httpClient.delete("http://localhost:3000/api/catalog/" + sneakerID)
          .subscribe(()=>{
              const updatedCatalog = this.sneakers.filter(sneaks=> sneaks.id !== sneakerID )
              this.sneakers = updatedCatalog;
              this.sneakerCatalogUpdated.next([...this.sneakers])
          })
      }

}