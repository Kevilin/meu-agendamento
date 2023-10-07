import firebase from "firebase/app";
import { toast } from "./toast";

const config = {
  apiKey: "AIzaSyDb6fhya6o3LjIRRy1nb9qislBJgWvsyAY",
  authDomain: "pedramoura-926cc.firebaseapp.com",
  projectId: "pedramoura-926cc",
  storageBucket: "pedramoura-926cc.appspot.com",
  messagingSenderId: "903279984235",
  appId: "1:903279984235:web:15c261d0b9f744313d3b2e"
};

firebase.initializeApp(config);

export function getCurrentUser() {
	return new Promise((resolve, reject) => {
		const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				resolve(user);
			} else {
				resolve(null);
			}
			unsubscribe();
		});
	});
}

export function logoutUser() {
	return firebase.auth().signOut();
}

export async function loginUser(username: string, password: string) {
	const email = `${username}@yahoo.com`;
	try {
		const res = await firebase
			.auth()
			.signInWithEmailAndPassword(email, password);
		return res;
	} catch (error) {
		toast(error.message, 4000);
		return false;
	}
}

export async function registerUser(username: string, password: string) {
	const email = `${username}@yahoo.com`;
	try {
		const res = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);

		return res;
	} catch (error) {
		toast(error.message, 4000);
		return false;
	}
}
