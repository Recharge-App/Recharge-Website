import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './index.css';
import { IonIcon } from "@ionic/react";
import { logoApple, logoAndroid } from "ionicons/icons";


function App() {

  return (
	<div className="bg-black w-screen h-screen space-y-20">
		<nav class="flex items-center justify-between flex-wrap bg-lightGray p-5">
	  		<div class="flex items-center flex-shrink-0 text-white mr-6">
				<img src="src/assets/recharge.png" alt="Recharge" className="w-8 mr-4"/>
	    		<span class="font-semibold text-xl tracking-tight">Recharge</span>
	  		</div>
	  		<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
	  		  	<div class="text-sm lg:flex-grow">
	  		  	  	<a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
	  		  	  	  	What we offer
	  		  	  	</a>
	  		  	  	<a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
	  		  	  	  	About Recharge
	  		  	  	</a>
	  		  	  	<a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
	  		  	  	  	Testimonials
	  		  	  	</a>
	  		  	</div>
	  		  	<div>
	  		  	  	<a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Get Recharge</a>
	  		  	</div>
	  		</div>
		</nav>

		<div className="flex items-center flex-col space-y-7">
			<div className="flex items-center flex-col space-y-5">
				<img src="src/assets/recharge.png" alt="Recharge" className="w-32"/>
				<p className="text-5xl text-white font-bold">Find your social group.</p>
				<p className="text-5xl text-white font-bold">Meet new people.</p>
				<p className="text-5xl text-white font-bold">Recharge on your own time.</p>
			</div>
			<p className="text-xl text-white font-medium">Recharge helps students create vibrant communities around campus and encourages them to meet new people.</p>
		</div>

		<div className="flex justify-center flex-row space-x-7">
			<a href="#" className="flex flex-row h-14 w-48 bg-lightYellow border border-lightYellow rounded text-black justify-around items-center">
				<IonIcon icon={logoApple} className="text-white mb-1" size="large" color="black"/>
				Download for IOS
			</a>
			<a href="#" className="flex flex-row h-14 w-56 bg-lightYellow border border-lightYellow rounded text-black justify-around items-center">
				<IonIcon icon={logoAndroid} className="text-white mb-1" size="large" color="black"/>
				Download for Android
			</a>
		</div>

	</div>
  )
}

export default App;
