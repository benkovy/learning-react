import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((child) => {
// //             expenses.push({
// //                 id: child.key,
// //                 ...child.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             });
//         });
//         console.log(expenses);
//     });


// // database.ref('expenses').push({
// //     description: 'Rent',
// //     note: '',
// //     amount: 10295,
// //     createdAt: 9003034302232
// // });


// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// // });

// // database.ref('location')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     }).catch((e) => {
// //         console.log('Error: ', e);
// //     });

// // database.ref().set({
// //     name: 'Benjamin Kovacs',
// //     age: 22,
// //     job: {
// //         title: 'Software Developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Toronto',
// //         country: 'Canada'
// //     }
// // }).then(() => {
// //     console.log('This worked');
// // }).catch((error) => {
// //     console.log('This failed');
// // });

// // database.ref().update({
// //     age: 24,
// //     'job/company': 'Amazon'
// // });

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log('Success!');
// //     }).catch((error) => {
// //         console.log('Failure', e);
// //     });