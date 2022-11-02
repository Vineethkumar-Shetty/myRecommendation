import "./styles.css";
import { useState } from "react";

var destinationsDB = {
  Beaches: [
    {
      name: "Kovalam Beach",
      description:
        "If you want action, you'll definitely find it at Kovalam Beach—the most popular and most developed beach in Kerala. Often likened to Goa's Calangute and Baga beaches, Kovalam is located not far from the capital, Trivandrum. It's actually made up of two main coves—Hawa (also referred to as Eve's Beach) and Lighthouse Beach. Lighthouse is the biggest and busiest of the two, with its promenade lined with open-air restaurants. Kovalam is a popular surfing destination in India. If you'd prefer somewhere a little more secluded, you'll find nearby Samudra Beach to be a better option.",
      rating: "Ratings: 5/5"
    },
    {
      name: "Varkala Beach",
      description:
        "Varkala Beach is the pick of the beaches in Kerala, in terms of ambiance and facilities. Although more and more tourists are flocking there every year, it's still less crowded than Kovalam and the scenery is striking. The beach lies at the bottom of a long stretch of cliff that's bordered by beach shacks and shops. You can stay right on the cliff, overlooking the ocean, or set back from it. It's incredibly romantic! Lots of young foreigners and couples enjoy this beach.",
      rating: "Ratings: 4.9/5"
    },
    {
      name: "Bekal Beach",
      description:
        "Bekal Beach, in far North Kerala (around a 90-minute drive from Mangalore airport in Karnataka) is famous for its old fort—one of the largest forts in Kerala. The beaches are clean and unspoiled, but luxury hotels have already started moving into the area, making it the place for a pampered getaway. The most popular resort is the gorgeous Taj Vivanta. It's possible to stay there for around 9,000 rupees per night, depending on the season. The secluded LaLiT Resort and Spa Bekal is located on a private beach with backwaters running through it. However, it's more pricey. Room rates start at 19,000 rupees per night.",
      rating: "Ratings: 4.8/5"
    }
  ],
  HillStations: [
    {
      name: "Munnar",
      description:
        "This quaint hill station in Kerala, perched at an altitude of 5026 feet, is all about lush green forests, extensive tea plantations, pristine valleys, vantage points and exotic flora and fauna. Munnar, also known as the “Kashmir of South India” is an excellent choice for a family vacation or a romantic escapade.Popular Places to Visit: Mattupetty Dam, Eravikulam National Park, Attukad Waterfalls, Tata Tea Museum, Dream Land Fun and Adventure, Photo Point, Chinnar Wildlife Sanctuary",
      rating: "Ratings: 5/5"
    },
    {
      name: "Wayanad",
      description:
        "Nestled among the Western Ghats, this beautiful hill station in Kerala is a treat for nature lovers and wildlife enthusiasts. The best thing about Wayanad is that it has a variety of attractions for different types of travellers, such as serene hills, spice plantations, waterfalls, lakes, pre-historic caves, and diverse flora and fauna. What’s more, visitors to the hill station can engage in trekking, river rafting, and other adrenaline-pumping activities.Popular Places to Visit: Edakkal Caves, Soochipara Waterfalls, Wayanad Wildlife Sanctuary, Tholpetty Wildlife Sanctuary, Meenmutty Waterfalls, Thirunelli Temple",
      rating: "Ratings: 4.9/5"
    },
    {
      name: "Vagamon",
      description:
        "Popularly known as the “Scotland of Asia”, this off-beat hill station boasts a wonderful amalgamation of verdant hills, lush green plains, waterfalls and sparkling rivers. Vagamon is also a popular adventure destination in the country, owing to the variety of sports activities available to tourists.Popular Places to Visit: Marmala Waterfalls, Karikadu View Point, Ulipooni Wildlife Sanctuary, Murugan Hill, Pattumala Church, Echo Point",
      rating: "Ratings: 4.8/5"
    }
  ],
  Backwaters: [
    {
      name: "Alleppey Backwaters",
      description:
        "Alleppey is the most popular backwater places in Kerala. Alleppey is always a prominent addition to Kerala Tour Packages and travel list, especially for couples! For travelers, it’s an incredibly enchanting experience to sail on the backwaters of these beautiful backwaters of Kerala.",
      rating: "Ratings: 5"
    },
    {
      name: "Kumarakom Backwaters",
      description:
        "Kumarakom is a small village in Kerala that is famous for its stunning collection of tiny islands jeweled over the Vembanad Lake. The backwaters formed by this very lake in Kumarakom are among the best backwaters in Kerala owing to the bird sanctuary located here which gives birdwatchers, bird photographers, and ornithologists the opportunity to spot a gazillion varieties of birds in a vast 14 acres of land.",
      rating: "Ratings: 4.9"
    },
    {
      name: "Kollam Backwaters",
      description:
        "Also called Quilon, Kollam is an ancient port town in Kerala and is located a mere 70 km away from Thiruvananthapuram, the state’s capital. This city is popular as the “Gateway to Kerala Backwaters” since it’s here that the backwater stretches of the state originates. This also means that here you’ll find the most virgin and clean version of the backwaters, which makes it one of the most beautiful backwater destinations in Kerala.",
      rating: "Ratings: 4.8"
    }
  ]
};

export default function App() {
  const [prefferedDestination, setprefferedDestination] = useState("Beaches");
  function genreClickHandler(destinations) {
    setprefferedDestination(destinations);
  }
  return (
    <div className="App">
      <h1>Places in Kerala🏕️🏞️</h1>
      <h2>Places to visit in kerala based on your interest</h2>
      <div>
        {Object.keys(destinationsDB).map((destination) => (
          <button
            onClick={() => genreClickHandler(destination)}
            style={{
              cursor: "pointer",
              background: "#fff",
              fontWeight: "bold",
              alignItems: "center",
              borderRadius: "0.5rem",
              width: "7rem",
              padding: "0.5rem  1rem",
              border: "2px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {destination}
          </button>
        ))}
      </div>
      <hr style={{ color: "black" }} />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {destinationsDB[prefferedDestination].map((location) => (
            <li
              key={location.name}
              style={{
                listStyle: "none",
                backgroundColor: "#fff",
                padding: "1rem",
                border: "2px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", padding: "1rem 0rem" }}>
                {" "}
                {location.name}{" "}
              </div>
              <div style={{ paddingBottom: "1rem" }}>
                {" "}
                {location.description}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}> {location.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
