import { Component } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'code-for-beginners-learning',
  imports: [],
  templateUrl: './learning.html',
  styleUrl: './learning.css'
})
export class Learning {

  // Blocking code


  constructor(){


    // Synchronous example 1 with blocking code
    console.log("Setup for Pooja start");
    debugger;

    // this.getPoojaEquipmentsExample1();
    // this.getPoojaEquipmentsExample2();


    // this.getPoojaEquipmentsExample2().then((response) =>{
    //   console.log("equipments is purchased");
    // }).catch((error) =>{
    //   console.log("error while purchasing equipments");
    // })

    // const response  = this.getPoojaEquipmentsExample2();

    const response = this.getPoojaEquipmentsExample2().subscribe({
      next: (response) =>{
        debugger;
        console.log("response", response)
      },
      error: (error) =>{
        console.log("error", error)
      }
    })
    

    debugger;
    console.log("Setup is done for Pooja, person is went for equipments purchasing");

  }


  async processPurchaseTask(){
    const response  = await this.getPoojaEquipmentsExample2();
  }


  getPoojaEquipmentsExample1(){
    let purchase = '';
    while (true){
      // pooja equipments is being purchased
      purchase = 'abcd';
    }

    return purchase;
  }

  getPromiseResult(): Promise<string>{
    return new Promise((resolve, reject)=>{
      resolve("Vegetables is being purchased");
      reject("Some error is occurred during purchase of items")
    } )
  }

   getPoojaEquipmentsExample2(){
    // setTimeout(() => {
    //   console.log("Pooja equipments purchased");
    // }, 5000);

    // return new Promise((resolve)=>{
    //   resolve("Vegetables is being purchased")
    // } )

    // fetch("https://example.com/getPurchasedItems").then((response) => response.json()).then((response)=>{
    //   console.log("Vegetables is purchased");
    // }).catch((error) => {
    //   console.log("There is some error to get vegetables", error);
    // })

    

     return new Observable((observer)=> {
      // observer.next("Item A is purchased");
      // observer.next("Item B is purchased");
      // observer.next("Item C is purchased");

      fetch("https://example.com/getPurchasedItems").then((response) => response.json()).then((response)=>{
      observer.next("Vegetables is purchased")
    }).catch((error) => {
      console.log("There is some error to get vegetables", error);
    })

      // return of("Purchased")
    })



  }


  off(item: string): Observable<string>{

    return new Observable((observer)=> {
      observer.next("Item A is purchased");
      observer.next("Item B is purchased")

      // return of("Purchased")
    })
  }

}
