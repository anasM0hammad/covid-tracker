import { Component, OnInit } from '@angular/core';
import { CovidService } from './covid.service' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	totalData = [] ;
	stateData = [] ;
	sortOrder = 'confirmed' ;

	state = ["state1" , "state2"] ;

	chartType = 'BarChart' ;
	 data = [
       ["Active", 0 , 0],
       ["Recovered", 0, 0],
       ["Deceased", 0, 0],
       ["Confirmed", 0, 0]
   ];
   columnNames = ["Basis" , "state1" , "state2"];
   options = {   
      vAxis: {
        minValue: 0
      },
      hAxis:{
         title: 'Number'
      },
      colors: ['#DC3545', '#2BA745', '#007BFF']
  }

	constructor(private covidService: CovidService){

	}

	ngOnInit(){
		this.covidService.getTotalData().subscribe(data => {
			this.totalData = data ;
		});

		this.covidService.getStateData().subscribe(data => {
			console.log(data);
			this.stateData = data ;
		});
	}

	sortData(basis){
		this.sortOrder = basis ;
		this.stateData.sort((state1, state2) => {
			return state2[this.sortOrder] - state1[this.sortOrder] ;
		});
	}

	setState(index, number){
		const state = this.stateData[index];
		this.state[number-1] = state.state ;
		this.columnNames[number] = state.state ;
		this.data[0][number] = state.active ;
		this.data[1][number] = state.recovered ;
		this.data[2][number] = state.deaths ;
		this.data[3][number] = state.confirmed ;
	}

	consoleIT(event){
		console.log(event) ;
	}
 
}
