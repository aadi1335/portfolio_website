import { fireDb, ref, push, set, onValue} from "./firebase.js";

try {
    document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const contact = e.target.contact.value;
    const email = e.target.email.value;
    const comment = e.target.comment.value;

    try {
        const dataRef = push(ref(fireDb, 'Message')); // push to create a new unique child
        await set(dataRef, {
            first_name,
            last_name,
            contact,
            email,
            comment,
            timestamp: new Date().toISOString()
        });

        alert("Thanks for contacting me😍. I will contact you soon....✌️");
        e.target.reset(); // optional: reset form after submission
    } catch (error) {
        console.error(error);
        alert("Some internal errors😒");
    }
});
} catch (error) {
    console.clear();
}


// window.addEventListener('load', () => {
//     const countRef = ref(fireDb, 'visitor');

//     onValue(countRef, (snapshot) => {
//         let count = snapshot.val()?.count || 0;

//         if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
//             // Increment only if it's the index/home page
//             count++;

//             set(countRef, { count })
//                 .then(() => {
//                     console.log('Visitor count updated:', count);
//                     document.getElementById("visitor-count").textContent = count;
//                 })
//                 .catch((error) => {
//                     console.error('Error updating count:', error);
//                 });
//         } else {
//             // On any other page, just display the count
//             document.getElementById("visitor-count").textContent = count;
//             console.log('Current visitor count:', count);
//         }
//     }, {
//         onlyOnce: true
//     });
// });