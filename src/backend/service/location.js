locationDatabase = {
  0: {
    id: 0,
    img: "zuccottiPark",
    name: "Zuccotti Park",
    address: "New York, NY 10006, United States",
    coordinate: {
      latitude: 40.7092689,
      longitude: -74.0134507
    }
  },
  1: {
    id: 1,
    img: "columbusPark",
    name: "Columbus Park",
    address: "Mulberry Street &, Baxter St, New York, NY 10013, United States",
    coordinate: {
      latitude: 40.7092889,
      longitude: -74.0200168
    }
  },
  2: {
    id: 2,
    img: "theOdeon",
    name: "The Odeon",
    address: "145 W Broadway, New York, NY 10013, United States",
    coordinate: {
      latitude: 40.7166296,
      longitude: -74.0099089
    }
  }
}

exports.getLocations = query => {
  // TODO: deal with query
  // query.q: the text in the search bar
  return locationDatabase
}

exports.getLocation = id => {
  return locationDatabase[id]
}
