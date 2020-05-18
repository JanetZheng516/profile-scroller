const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'http://randomuser.me/api/portraits/men/32.jpg'
    },

    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'http://randomuser.me/api/portraits/women/82.jpg'
    },

    {
        name: 'William Johnsom',
        age: 30,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'http://randomuser.me/api/portraits/men/17.jpg'
    }
];

const profiles = profileIterator(data);

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Call first profile
// First profile will show after done
nextProfile();

// Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;


if(currentProfile !== undefined) {
document.getElementById('profileDisplay').innerHTML = `
<ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
</ul>
`;

// Next Image Display
document.getElementById('imageDisplay').innerHTML = `
<img src="${currentProfile.image}">
`;
} else {
    window.location.reload();
}
  
}


// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;


    return {
        next: function() {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false } :
            { done: true }
        }
    };

}