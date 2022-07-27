import { useState } from 'react';
import './index.css';
import { IonIcon } from "@ionic/react";
import { logoApple, logoAndroid, logoInstagram, logoDiscord, logoLinkedin} from "ionicons/icons";


function App() {

  return (
	<div className="flex-1 flex-col w-screen h-screen">
		<div className="h-screen w-screen bg-black space-y-20">
			<nav className="flex items-center justify-between flex-wrap bg-black p-5">
	  			<div className="flex items-center flex-shrink-0 text-white mr-6">
					<img src="/recharge.png" alt="Recharge" className="w-8 mr-4"/>
	    			<span className="font-semibold text-xl tracking-tight">Recharge</span>
	  			</div>
			</nav>

			<div className="flex items-center flex-col space-y-7">
				<div className="flex items-center flex-col space-y-5">
					<img src="/recharge.png" alt="Recharge" className="w-32"/>
					<p className="text-5xl text-white font-bold">Find your social group.</p>
					<p className="text-5xl text-white font-bold">Meet new people.</p>
					<p className="text-5xl text-white font-bold">Recharge on your own time.</p>
				</div>
				<p className="text-xl text-white font-medium">Recharge helps students create vibrant communities around campus and encourages them to meet new people.</p>
			</div>

			<div className="flex w-screen justify-center flex-row space-x-7">
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
	</div>
  )
}

export default App;
