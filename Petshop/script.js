// Enhanced pet data with references to images in HTML
let pets = [
    {
        id: 1,
        name: "Buddy",
        type: "dog",
        breed: "Golden Retriever",
        age: 2,
        price: 500,
        description: "Friendly and playful golden retriever puppy. Loves kids and other pets. Fully vaccinated and trained.",
        featured: true
    },
    {
        id: 2,
        name: "Whiskers",
        type: "cat",
        breed: "Scottish Fold",
        age: 1,
        price: 450,
        description: "Adorable Scottish Fold kitten with folded ears. Very affectionate and loves cuddles. Litter trained.",
        featured: true
    },
    {
        id: 3,
        name: "Tweety",
        type: "bird",
        breed: "Cockatiel",
        age: 0.5,
        price: 120,
        description: "Sweet yellow cockatiel that loves to whistle. Cage and accessories included."
    },
    {
        id: 4,
        name: "Bella",
        type: "dog",
        breed: "Pomeranian",
        age: 1.5,
        price: 650,
        description: "Fluffy Pomeranian with a big personality. Perfect for apartment living and loves to be carried.",
        featured: true
    },
    {
        id: 5,
        name: "Luna",
        type: "cat",
        breed: "Ragdoll",
        age: 1,
        price: 550,
        description: "Beautiful blue-eyed Ragdoll kitten. Very gentle and goes limp when you hold her."
    },
    {
        id: 6,
        name: "Blue",
        type: "bird",
        breed: "Parakeet",
        age: 0.3,
        price: 80,
        description: "Vibrant blue parakeet that loves to interact. Comes with cage and toys."
    },
    {
        id: 7,
        name: "Thumper",
        type: "rabbit",
        breed: "Netherland Dwarf",
        age: 0.8,
        price: 150,
        description: "Tiny Netherland Dwarf rabbit with the cutest ears. Litter box trained and very social."
    },
    {
        id: 8,
        name: "Goldie",
        type: "fish",
        breed: "Betta Fish",
        age: 0.1,
        price: 25,
        description: "Stunning blue and red Betta fish with flowing fins. Comes with small aquarium setup."
    },
    {
        id: 9,
        name: "Rocky",
        type: "dog",
        breed: "Shiba Inu",
        age: 0.2,
        price: 800,
        description: "Adorable Shiba Inu with a fox-like appearance. Very clean and easy to train."
    },
    {
        id: 10,
        name: "Misty",
        type: "cat",
        breed: "Maine Coon",
        age: 1.5,
        price: 600,
        description: "Fluffy Maine Coon kitten with ear tufts. Very gentle and great with children."
    }
];

// DOM Elements
const petsContainer = document.getElementById('pets-container');
const sellPetBtn = document.getElementById('sell-pet-btn');
const sellModal = document.getElementById('sell-modal');
const purchaseModal = document.getElementById('purchase-modal');
const sellPetForm = document.getElementById('sell-pet-form');
const purchaseForm = document.getElementById('purchase-form');
const searchInput = document.getElementById('search');
const petTypeFilter = document.getElementById('pet-type-filter');
const closeButtons = document.querySelectorAll('.close');

// Display pets with enhanced cards
function renderPets(petsToRender = pets) {
    petsContainer.innerHTML = '';
    
    if (petsToRender.length === 0) {
        petsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-paw"></i>
                <h3>No pets found</h3>
                <p>Try adjusting your search filters</p>
            </div>
        `;
        return;
    }
    
    petsToRender.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.className = `pet-card ${pet.featured ? 'featured' : ''}`;
        petCard.innerHTML = `
            <div class="pet-image">
                <img src="${getPetImage(pet)}" alt="${pet.name} the ${pet.breed}">
                ${pet.featured ? '<span class="featured-badge"><i class="fas fa-star"></i> Featured</span>' : ''}
            </div>
            <div class="pet-info">
                <div class="pet-header">
                    <h3>${pet.name}</h3>
                    <span class="pet-type ${pet.type}">${pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}</span>
                </div>
                <p class="breed"><i class="fas fa-paw"></i> ${pet.breed}</p>
                <div class="pet-details">
                    <p><i class="fas fa-birthday-cake"></i> ${pet.age} ${pet.age === 1 ? 'year' : 'years'} old</p>
                    <p class="price">$${pet.price}</p>
                </div>
                <p class="description">${pet.description}</p>
                <button class="buy-btn gradient-btn" data-id="${pet.id}">
                    <i class="fas fa-shopping-cart"></i> Adopt Now
                </button>
            </div>
        `;
        petsContainer.appendChild(petCard);
    });
    
    // Add event listeners to buy buttons
    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const petId = parseInt(this.getAttribute('data-id'));
            const pet = pets.find(p => p.id === petId);
            showPurchaseModal(pet);
        });
    });
}

// Helper function to get pet image
function getPetImage(pet) {
    const petImages = {
        1: "https://images.pexels.com/photos/752383/pexels-photo-752383.jpeg?cs=srgb&dl=adult-golden-retriever-close-up-photo-752383.jpg&fm=jpg",
        2: "https://www.wallpaperbetter.com/wallpaper/25/622/351/scottish-fold-kitten-1080P-wallpaper.jpg",
        3: "https://www.hepper.com/wp-content/uploads/2023/04/close-up-of-a-lutino-cockatiel-bird_Miss-Nachcha-Chayapan_Shutterstock.jpg",
        4: "https://www.advicefordogs.com/wp-content/uploads/2023/08/pomeranian.jpg",
        5: "https://www.thesprucepets.com/thmb/17UY4UpiMekV7WpeXDziXsnt7q4=/1646x0/filters:no_upscale():strip_icc()/GettyImages-145577979-d97e955b5d8043fd96747447451f78b7.jpg",
        6: "https://winnebagoanimals.org/wp-content/uploads/2021/08/Parakeeets.jpg",
        7: "https://tse3.mm.bing.net/th/id/OIP.sD8msN_IAPrR_-LDMKZmoAHaFj?pid=Api&P=0&h=180",
        8: "https://tse3.mm.bing.net/th/id/OIP.LuSCJBUiDgIwSPccmJGX7wHaFR?pid=Api&P=0&h=180",
        9: "https://tse2.mm.bing.net/th/id/OIP.CDApEfUXgIR-jnh_1o0ZggHaGE?pid=Api&P=0&h=180",
        10: "https://www.bubblypet.com/wp-content/uploads/2022/07/Beautiful-gray-Maine-Coon-cat-standing-outdoors-in-the-garden.jpg"
    };
    
    return petImages[pet.id] || getDefaultImage(pet.type);
}

// Show sell modal
sellPetBtn.addEventListener('click', () => {
    sellModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

// Show purchase modal
function showPurchaseModal(pet) {
    document.getElementById('pet-details').innerHTML = `
        <div class="purchase-pet-info">
            <img src="${getPetImage(pet)}" alt="${pet.name}" class="purchase-pet-image">
            <div class="purchase-details">
                <h3>${pet.name}</h3>
                <p class="breed"><i class="fas fa-paw"></i> ${pet.breed}</p>
                <p class="price">$${pet.price}</p>
                <p class="description">${pet.description}</p>
            </div>
        </div>
    `;
    purchaseForm.setAttribute('data-pet-id', pet.id);
    purchaseModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Close modals
closeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Add new pet
sellPetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newPet = {
        id: pets.length + 1,
        name: document.getElementById('pet-name').value,
        type: document.getElementById('pet-type').value,
        breed: document.getElementById('pet-breed').value,
        age: parseInt(document.getElementById('pet-age').value),
        price: parseFloat(document.getElementById('pet-price').value),
        description: document.getElementById('pet-description').value
    };
    
    pets.push(newPet);
    renderPets();
    sellModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    sellPetForm.reset();
    
    // Show confirmation
    showNotification(`Successfully listed ${newPet.name}!`);
});

// Complete purchase
purchaseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const petId = parseInt(purchaseForm.getAttribute('data-pet-id'));
    const pet = pets.find(p => p.id === petId);
    
    const buyerName = document.getElementById('buyer-name').value;
    const buyerEmail = document.getElementById('buyer-email').value;
    
    // Show confirmation
    showNotification(`Thank you, ${buyerName}! Your adoption of ${pet.name} is complete.`, 'success');
    
    // Remove the purchased pet (in a real app, you'd mark as sold)
    pets = pets.filter(p => p.id !== petId);
    
    renderPets();
    purchaseModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    purchaseForm.reset();
});

// Search and filter
function filterPets() {
    const searchTerm = searchInput.value.toLowerCase();
    const typeFilter = petTypeFilter.value;
    
    let filteredPets = pets.filter(pet => {
        const matchesSearch = pet.name.toLowerCase().includes(searchTerm) || 
                             pet.breed.toLowerCase().includes(searchTerm) ||
                             pet.description.toLowerCase().includes(searchTerm);
        const matchesType = typeFilter === 'all' || pet.type === typeFilter;
        return matchesSearch && matchesType;
    });
    
    renderPets(filteredPets);
}

searchInput.addEventListener('input', filterPets);
petTypeFilter.addEventListener('change', filterPets);

// Helper function for default pet images
function getDefaultImage(petType) {
    const defaultImages = {
        dog: 'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fHww',
        cat: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww',
        bird: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHx8MA%3D%3D',
        rabbit: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fHww',
        fish: 'https://images.unsplash.com/photo-1530968464165-544339bae527?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGZpc2h8ZW58MHx8MHx8fDA%3D',
        other: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0fGVufDB8fDB8fHww'
    };
    
    return defaultImages[petType] || defaultImages.other;
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Initialize
renderPets();