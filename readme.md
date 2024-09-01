# Weather App

A simple weather application built using HTML, CSS, JavaScript, and Bootstrap. This app allows users to search for a location and get current weather conditions, as well as a 7-day forecast. The app also includes the functionality to fetch the weather based on the user's current location.

## Features

- **Location Search with Suggestions:** As the user types a location name, suggestions are displayed in a dropdown list.
- **Current Location Weather:** Users can fetch weather information based on their current geolocation.
- **Weather Information Display:**
  - Current temperature and weather conditions.
  - Maximum and minimum temperatures for the current day.
  - 7-day weather forecast.
- **Responsive Design:** Utilizes Bootstrap to ensure the app is responsive and works on different screen sizes.

## Technologies Used

- **HTML:** Structure of the app.
- **CSS:** Basic styling, including Bootstrap for responsive design.
- **JavaScript:** Fetching weather data, handling user input, and updating the UI.
- **Bootstrap:** For responsive and styled components.
- **WeatherAPI:** Used to fetch weather data and location suggestions.

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd weather-app
   ```
3. **Set up Your API Key:**
   - Create a `.env` file in the root directory of your project.
   - Add your API key to the `.env` file:
   ```bash
   WEATHER_API_KEY=your_api_key_here
   ```
   - Make sure to add the `.env` file to your `.gitignore`:
   ```bash
   echo ".env" >> .gitignore
   ```
4. **Open `index.html` in your browser:**
   - You can simply double-click the `index.html` file or serve the project using a local server like `live-server` for better development experience.

## Usage

- **Search for a Location:** Start typing a location name in the input field. Select a suggestion from the dropdown list to fetch and display weather information.
- **Get Weather for Current Location:** Click on the "Use Current Location" button to allow the app to fetch weather data based on your current geographical location.
- **View Weather Information:** The app displays current temperature, weather conditions, and a 7-day forecast.

## API Information

This project uses the [WeatherAPI](https://www.weatherapi.com/docs/) to fetch weather data. You will need an API key to access the data. Follow the instructions in the setup section to add your API key securely.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## MIT License
