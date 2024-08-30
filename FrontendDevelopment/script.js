document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await fetch('http://localhost:3006/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        });

        if (response.ok) {
            const result = await response.json();
            alert('Message sent successfully');
        } else {
            alert('Error sending message');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
// SECTION 3 - API INTEGRATION

document.addEventListener('DOMContentLoaded', () => {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = 'c84e4e5a15dc0ec1bfe2e9c68aec797e';
    const weatherInfo = document.getElementById('weather-info');

    // Function to fetch weather data
    const fetchWeather = async () => {
        try {
            // Get user's location
            navigator.geolocation.getCurrentPosition(async position => {
                const { latitude, longitude } = position.coords;
                
                // Fetch weather data from OpenWeatherMap
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
                const data = await response.json();

                // Display weather data
                const weather = `
                    <div class="weather-icon">
                        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
                    </div>
                    <h3>${data.name}</h3>
                    <p>${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</p>
                    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                `;
                weatherInfo.innerHTML = weather;
            }, () => {
                weatherInfo.innerHTML = '<p>Unable to retrieve your location.</p>';
            });
        } catch (error) {
            weatherInfo.innerHTML = '<p>Failed to fetch weather data.</p>';
        }
    };

    fetchWeather();
});

  // SECTION 3 - API INTEGRATION 
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '38a70dfdd2d549e8a1907f2187574c5e';  // Replace with your actual NewsAPI key
    const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=6&apiKey=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);  // Log the response to inspect image URLs
            const newsContainer = document.querySelector('.news-container');
            const articles = data.articles;

            newsContainer.innerHTML = '';  // Clear previous content

            articles.forEach(article => {
                // Use a fallback image if no image is available
                const imageUrl = article.urlToImage || getRandomPlaceholderImage();

                // Create the news card dynamically
                const newsCard = document.createElement('div');
                newsCard.classList.add('news-card');

                newsCard.innerHTML = `
                    <img src="${imageUrl}" alt="News Image">
                    <h4>${article.title}</h4>
                    <p>${article.description ? article.description.slice(0, 100) + '...' : ''}</p>
                    <a href="${article.url}" target="_blank">Read More</a>
                `;

                newsContainer.appendChild(newsCard);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
});

// Function to select a random placeholder image if no image is available
function getRandomPlaceholderImage() {
    const placeholderImages = [
        'images/image1.jpeg',
        'images/image2.jpeg',
        'images/image3.jpeg',
        'images/image4.jpeg',
        'images/image5.jpeg',
        'images/image6.jpeg'
    ];
    const randomIndex = Math.floor(Math.random() * placeholderImages.length);
    return placeholderImages[randomIndex];
}
