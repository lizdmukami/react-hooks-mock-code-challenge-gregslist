import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then((data) => setListings(() => data))
  }, []);

  const listLoop = listings.map((listing)=> {
    return(
      <ListingCard key={listing.id} id={listing.id} description={listing.description} image={listing.image} location={listing.location} />
    )
  })

  return (
    <main>
      <ul className="cards">
        {listLoop}
      </ul>
    </main>
  );
}

export default ListingsContainer;
