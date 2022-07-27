import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './index.css';
import { IonIcon } from "@ionic/react";
import { logoApple, logoAndroid, logoInstagram, logoDiscord, logoLinkedin} from "ionicons/icons";


function App() {

  return (
	<div className="flex-1 flex-col w-screen h-screen">
		<div className="h-screen w-screen bg-black space-y-20">
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

		<div className="flex flex-row h-5/6 w-screen bg-lightGray justify-evenly items-center">
			<div className="flex flex-col w-2/5 h-5/6 space-y-5">
				<div className="w-full h-3/4 rounded-xl bg-darkGray">
				</div>
				<div className="w-full h-3/6 rounded-xl bg-darkGray">
				</div>
			</div>
			<div className="flex flex-col w-2/5 h-5/6 space-y-5">
				<div className="w-full h-3/6 rounded-xl bg-darkGray">
				</div>
				<div className="w-full h-3/4 rounded-xl bg-darkGray">
				</div>
			</div>
		</div>

		<div className="flex flex-row h-2/5 w-screen bg-black justify-evenly items-center">
			<div className="w-1/4 h-4/6 rounded-xl bg-darkGray">
			</div>
			<div className="w-1/4 h-4/6 rounded-xl bg-darkGray">
			</div>
			<div className="w-1/4 h-4/6 rounded-xl bg-darkGray">
			</div>
		</div>

		<div className="flex flex-row w-screen h-16 bg-black insert-x-0 bottom-0 items-center justify-between">
			<div className="flex flex-row ml-10 space-x-5 items-center">
				<img src="src/assets/recharge.png" alt="Recharge" className="w-8 h-10"/>
				<p className="text-white">Copyright © 2021 Recharge. All Rights reserved.</p>
			</div>
			<div className="flex flex-row text-white mr-10 space-x-5 items-center">
				<a href="" target="_blank"><IonIcon icon={logoInstagram} className="text-white" size="large" color="white"/></a>
				<a href="https://discord.gg/G3DqGvxm7G" target="_blank"><IonIcon icon={logoDiscord} className="text-white" size="large" color="white"/></a>
				<a href="https://www.linkedin.com/company/82372367/" target="_blank"><IonIcon icon={logoLinkedin} className="text-white" size="large" color="white"/></a>
			</div>
		</div>
	</div>
  )
}

export default App;
