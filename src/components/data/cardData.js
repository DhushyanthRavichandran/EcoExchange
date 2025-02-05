const cardData = [
  // Food Items
  {
    image: 'images/burger.avif',
    itemName: 'Chicken Burger',
    location: 'Location M',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Juicy chicken burger.',
    quantity: 5,
    pickupInstruction: 'Come at 5 o\'clock.'
  },
  {
    image: 'images/chickenchilly.jpg',
    itemName: 'Chicken Chilly',
    location: 'Location X',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Spicy chicken with chilly sauce.',
    quantity: 3,
    pickupInstruction: ''
  },
  {
    image: 'images/muttaveechu.avif',
    itemName: 'Spicy Muttaveechu',
    location: 'Location Y',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Spicy and fried muttaveechu.',
    quantity: 8,
    pickupInstruction: 'Pickup anytime.'
  },
  {
    image: 'images/pasta.jpg',
    itemName: 'Vegetable Pasta',
    location: 'Location Z',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Pasta with assorted vegetables.',
    quantity: 2,
    pickupInstruction: 'Call before pickup.'
  },
  {
    image: 'images/pongal.webp',
    itemName: 'Pongal',
    location: 'Location A',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Traditional South Indian dish.',
    quantity: 0,
    pickupInstruction: ''
  },
  {
    image: 'images/samaso.jpeg',
    itemName: 'Vegetable Samosa',
    location: 'Location B',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Crispy samosa with vegetable filling.',
    quantity: 6,
    pickupInstruction: 'Pickup after 6 PM.'
  },
  // Non-Food Items
  {
    image: 'images/bed.webp',
    itemName: 'Single Bed',
    location: 'Location C',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Comfortable single bed.',
    quantity: 1,
    pickupInstruction: 'Pickup during weekends.'
  },
  {
    image: 'images/bottle.webp',
    itemName: 'Water Bottle',
    location: 'Location D',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Personal',
    description: 'Reusable water bottle.',
    quantity: 4,
    pickupInstruction: 'Pickup before 5 PM.'
  },
  {
    image: 'images/chair.webp',
    itemName: 'Office Chair',
    location: 'Location E',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Ergonomic office chair.',
    quantity: 2,
    pickupInstruction: 'Pickup in the morning.'
  },
  {
    image: 'images/ironbox.webp',
    itemName: 'Steam Iron',
    location: 'Location F',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Powerful steam iron.',
    quantity: 3,
    pickupInstruction: 'Pickup after 4 PM.'
  },
  {
    image: 'images/table.jpg',
    itemName: 'Dining Table',
    location: 'Location G',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Sturdy dining table.',
    quantity: 0,
    pickupInstruction: ''
  },
  {
    image: 'images/bucket.jpg',
    itemName: 'Plastic Bucket',
    location: 'Location H',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Large plastic bucket.',
    quantity: 2,
    pickupInstruction: 'Pickup during weekdays.'
  },
  // Additional Data (to reach 100)
  {
    image: 'images/burger.avif',
    itemName: 'Chicken Burger',
    location: 'Location M',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Juicy chicken burger.',
    quantity: 5,
    pickupInstruction: 'Come at 5 o\'clock.'
  },
  {
    image: 'images/chickenchilly.jpg',
    itemName: 'Chicken Chilly',
    location: 'Location X',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Spicy chicken with chilly sauce.',
    quantity: 3,
    pickupInstruction: ''
  },
  {
    image: 'images/muttaveechu.avif',
    itemName: 'Spicy Muttaveechu',
    location: 'Location Y',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Spicy and fried muttaveechu.',
    quantity: 8,
    pickupInstruction: 'Pickup anytime.'
  },
  {
    image: 'images/pasta.jpg',
    itemName: 'Vegetable Pasta',
    location: 'Location Z',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Pasta with assorted vegetables.',
    quantity: 2,
    pickupInstruction: 'Call before pickup.'
  },
  {
    image: 'images/pongal.webp',
    itemName: 'Pongal',
    location: 'Location A',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Traditional South Indian dish.',
    quantity: 0,
    pickupInstruction: ''
  },
  {
    image: 'images/samaso.jpeg',
    itemName: 'Vegetable Samosa',
    location: 'Location B',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Crispy samosa with vegetable filling.',
    quantity: 6,
    pickupInstruction: 'Pickup after 6 PM.'
  },
  {
    image: 'images/bed.webp',
    itemName: 'Single Bed',
    location: 'Location C',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Comfortable single bed.',
    quantity: 1,
    pickupInstruction: 'Pickup during weekends.'
  },
  {
    image: 'images/bottle.webp',
    itemName: 'Water Bottle',
    location: 'Location D',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Personal',
    description: 'Reusable water bottle.',
    quantity: 4,
    pickupInstruction: 'Pickup before 5 PM.'
  },
  {
    image: 'images/chair.webp',
    itemName: 'Office Chair',
    location: 'Location E',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Ergonomic office chair.',
    quantity: 2,
    pickupInstruction: 'Pickup in the morning.'
  },
  {
    image: 'images/ironbox.webp',
    itemName: 'Steam Iron',
    location: 'Location F',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Powerful steam iron.',
    quantity: 3,
    pickupInstruction: 'Pickup after 4 PM.'
  },
  {
    image: 'images/table.jpg',
    itemName: 'Dining Table',
    location: 'Location G',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Sturdy dining table.',
    quantity: 0,
    pickupInstruction: ''
  },
  {
    image: 'images/bucket.jpg',
    itemName: 'Plastic Bucket',
    location: 'Location H',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Large plastic bucket.',
    quantity: 2,
    pickupInstruction: 'Pickup during weekdays.'
  },
  // Additional Data (to reach 100)
  {
    image: 'images/burger.avif',
    itemName: 'Chicken Burger',
    location: 'Location M',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Juicy chicken burger.',
    quantity: 5,
    pickupInstruction: 'Come at 5 o\'clock.'
  },
  {
    image: 'images/chickenchilly.jpg',
    itemName: 'Chicken Chilly',
    location: 'Location X',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Spicy chicken with chilly sauce.',
    quantity: 3,
    pickupInstruction: ''
  },
  {
    image: 'images/muttaveechu.avif',
    itemName: 'Spicy Muttaveechu',
    location: 'Location Y',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Spicy and fried muttaveechu.',
    quantity: 8,
    pickupInstruction: 'Pickup anytime.'
  },
  {
    image: 'images/pasta.jpg',
    itemName: 'Vegetable Pasta',
    location: 'Location Z',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Pasta with assorted vegetables.',
    quantity: 2,
    pickupInstruction: 'Call before pickup.'
  },
  {
    image: 'images/pongal.webp',
    itemName: 'Pongal',
    location: 'Location A',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Traditional South Indian dish.',
    quantity: 0,
    pickupInstruction: ''
  },
  {
    image: 'images/samaso.jpeg',
    itemName: 'Vegetable Samosa',
    location: 'Location B',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Crispy samosa with vegetable filling.',
    quantity: 6,
    pickupInstruction: 'Pickup after 6 PM.'
  },
  {
    image: 'images/bed.webp',
    itemName: 'Single Bed',
    location: 'Location C',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Comfortable single bed.',
    quantity: 1,
    pickupInstruction: 'Pickup during weekends.'
  },
  {
    image: 'images/bottle.webp',
    itemName: 'Water Bottle',
    location: 'Location D',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Personal',
    description: 'Reusable water bottle.',
    quantity: 4,
    pickupInstruction: 'Pickup before 5 PM.'
  },
  {
    image: 'images/chair.webp',
    itemName: 'Office Chair',
    location: 'Location E',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Ergonomic office chair.',
    quantity: 2,
    pickupInstruction: 'Pickup in the morning.'
  },
  {
    image: 'images/ironbox.webp',
    itemName: 'Steam Iron',
    location: 'Location F',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Powerful steam iron.',
    quantity: 3,
    pickupInstruction: 'Pickup after 4 PM.'
  },
  {
    image: 'images/table.jpg',
    itemName: 'Dining Table',
    location: 'Location G',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Sturdy dining table.',
    quantity: 0,
    pickupInstruction: ''
  },
  {
    image: 'images/bucket.jpg',
    itemName: 'Plastic Bucket',
    location: 'Location H',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Large plastic bucket.',
    quantity: 2,
    pickupInstruction: 'Pickup during weekdays.'
  },  {
    image: 'images/burger.avif',
    itemName: 'Chicken Burger',
    location: 'Location M',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Juicy chicken burger.',
    quantity: 5,
    pickupInstruction: 'Come at 5 o\'clock.'
  },
  {
    image: 'images/chickenchilly.jpg',
    itemName: 'Chicken Chilly',
    location: 'Location X',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Spicy chicken with chilly sauce.',
    quantity: 3,
    pickupInstruction: ''
  },
  {
    image: 'images/muttaveechu.avif',
    itemName: 'Spicy Muttaveechu',
    location: 'Location Y',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Spicy and fried muttaveechu.',
    quantity: 8,
    pickupInstruction: 'Pickup anytime.'
  },
  {
    image: 'images/pasta.jpg',
    itemName: 'Vegetable Pasta',
    location: 'Location Z',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Pasta with assorted vegetables.',
    quantity: 2,
    pickupInstruction: 'Call before pickup.'
  },
  {
    image: 'images/pongal.webp',
    itemName: 'Pongal',
    location: 'Location A',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Traditional South Indian dish.',
    quantity: 0,
    pickupInstruction: ''
  },
  {
    image: 'images/samaso.jpeg',
    itemName: 'Vegetable Samosa',
    location: 'Location B',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Crispy samosa with vegetable filling.',
    quantity: 6,
    pickupInstruction: 'Pickup after 6 PM.'
  },
  // Non-Food Items
  {
    image: 'images/bed.webp',
    itemName: 'Single Bed',
    location: 'Location C',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Comfortable single bed.',
    quantity: 1,
    pickupInstruction: 'Pickup during weekends.'
  },
  {
    image: 'images/bottle.webp',
    itemName: 'Water Bottle',
    location: 'Location D',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Personal',
    description: 'Reusable water bottle.',
    quantity: 4,
    pickupInstruction: 'Pickup before 5 PM.'
  },
  {
    image: 'images/chair.webp',
    itemName: 'Office Chair',
    location: 'Location E',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Ergonomic office chair.',
    quantity: 2,
    pickupInstruction: 'Pickup in the morning.'
  },
  {
    image: 'images/ironbox.webp',
    itemName: 'Steam Iron',
    location: 'Location F',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Powerful steam iron.',
    quantity: 3,
    pickupInstruction: 'Pickup after 4 PM.'
  },
  {
    image: 'images/table.jpg',
    itemName: 'Dining Table',
    location: 'Location G',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Sturdy dining table.',
    quantity: 0,
    pickupInstruction: ''
  },
  {
    image: 'images/bucket.jpg',
    itemName: 'Plastic Bucket',
    location: 'Location H',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Large plastic bucket.',
    quantity: 2,
    pickupInstruction: 'Pickup during weekdays.'
  },
  // Additional Data
  {
    image: 'images/bed.webp',
    itemName: 'Single Bed',
    location: 'Location I',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Foldable single bed.',
    quantity: 1,
    pickupInstruction: 'Pickup after 3 PM.'
  },
  {
    image: 'images/bottle.webp',
    itemName: 'Glass Bottle',
    location: 'Location J',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Personal',
    description: 'Vintage glass bottle.',
    quantity: 2,
    pickupInstruction: 'Pickup before 6 PM.'
  },
  {
    image: 'images/chair.webp',
    itemName: 'Rocking Chair',
    location: 'Location K',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Comfortable rocking chair.',
    quantity: 1,
    pickupInstruction: 'Pickup in the evening.'
  },
  {
    image: 'images/ironbox.webp',
    itemName: 'Clothes Iron',
    location: 'Location L',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Steam clothes iron.',
    quantity: 3,
    pickupInstruction: 'Pickup during weekdays.'
  },
  {
    image: 'images/table.jpg',
    itemName: 'Study Table',
    location: 'Location M',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Compact study table.',
    quantity: 1,
    pickupInstruction: 'Pickup during weekends.'
  },
  {
    image: 'images/bucket.jpg',
    itemName: 'Metal Bucket',
    location: 'Location N',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Personal',
    description: 'Sturdy metal bucket.',
    quantity: 2,
    pickupInstruction: 'Pickup before 4 PM.'
  },
  {
    image: 'images/bed.webp',
    itemName: 'Double Bed',
    location: 'Location O',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Spacious double bed.',
    quantity: 1,
    pickupInstruction: 'Pickup after 2 PM.'
  },
  {
    image: 'images/bottle.webp',
    itemName: 'Plastic Bottle',
    location: 'Location P',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Recyclable plastic bottle.',
    quantity: 3,
    pickupInstruction: 'Pickup in the morning.'
  },
  {
    image: 'images/chair.webp',
    itemName: 'Desk Chair',
    location: 'Location Q',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Adjustable desk chair.',
    quantity: 0,
    pickupInstruction: ''
  },
  {
    image: 'images/ironbox.webp',
    itemName: 'Travel Iron',
    location: 'Location R',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Compact travel iron.',
    quantity: 2,
    pickupInstruction: 'Pickup during weekdays.'
  },
  {
    image: 'images/table.jpg',
    itemName: 'Coffee Table',
    location: 'Location S',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Modern coffee table.',
    quantity: 1,
    pickupInstruction: 'Pickup after 3 PM.'
  },
  {
    image: 'images/bucket.jpg',
    itemName: 'Paint Bucket',
    location: 'Location T',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Personal',
    description: 'Large paint bucket.',
    quantity: 2,
    pickupInstruction: 'Pickup before 5 PM.'
  },
  {
    image: 'images/bed.webp',
    itemName: 'Folding Bed',
    location: 'Location U',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Convenient folding bed.',
    quantity: 1,
    pickupInstruction: 'Pickup during weekends.'
  },
  {
    image: 'images/bottle.webp',
    itemName: 'Metallic Bottle',
    location: 'Location V',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Durable metallic water bottle.',
    quantity: 3,
    pickupInstruction: 'Pickup before 4 PM.'
  },
  {
    image: 'images/chair.webp',
    itemName: 'Dining Chair',
    location: 'Location W',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Classic dining chair.',
    quantity: 2,
    pickupInstruction: 'Pickup in the evening.'
  },
  {
    image: 'images/ironbox.webp',
    itemName: 'Mini Iron',
    location: 'Location X',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Compact mini iron.',
    quantity: 0,
    pickupInstruction: ''
  },
  {
    image: 'images/table.jpg',
    itemName: 'Study Desk',
    location: 'Location Y',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Study desk with drawers.',
    quantity: 1,
    pickupInstruction: 'Pickup during weekends.'
  },
  {
    image: 'images/bucket.jpg',
    itemName: 'Steel Bucket',
    location: 'Location Z',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Heavy-duty steel bucket.',
    quantity: 2,
    pickupInstruction: 'Pickup during weekdays.'
  },
  {
    image: 'images/bed.webp',
    itemName: 'King Size Bed',
    location: 'Location A1',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Personal',
    description: 'Luxurious king size bed.',
    quantity: 1,
    pickupInstruction: 'Pickup before 6 PM.'
  },
  {
    image: 'images/bottle.webp',
    itemName: 'Glass Water Bottle',
    location: 'Location B1',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Eco-friendly glass water bottle.',
    quantity: 3,
    pickupInstruction: 'Pickup in the morning.'
  },
  {
    image: 'images/chair.webp',
    itemName: 'Bean Bag Chair',
    location: 'Location C1',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Comfortable bean bag chair.',
    quantity: 1,
    pickupInstruction: 'Pickup in the evening.'
  },
  {
    image: 'images/ironbox.webp',
    itemName: 'Portable Iron',
    location: 'Location D1',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Portable travel iron.',
    quantity: 2,
    pickupInstruction: 'Pickup during weekdays.'
  },
  {
    image: 'images/table.jpg',
    itemName: 'Outdoor Table',
    location: 'Location E1',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Weather-resistant outdoor table.',
    quantity: 0,
    pickupInstruction: ''
  },
  {
    image: 'images/bucket.jpg',
    itemName: 'Plastic Paint Bucket',
    location: 'Location F1',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Lightweight plastic paint bucket.',
    quantity: 2,
    pickupInstruction: 'Pickup during weekdays.'
  },
  {
    image: 'images/bed.webp',
    itemName: 'Double Decker Bed',
    location: 'Location G1',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Space-saving double decker bed.',
    quantity: 1,
    pickupInstruction: 'Pickup after 2 PM.'
  },
  {
    image: 'images/bottle.webp',
    itemName: 'Steel Water Bottle',
    location: 'Location H1',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Durable stainless steel water bottle.',
    quantity: 3,
    pickupInstruction: 'Pickup in the morning.'
  },
  {
    image: 'images/chair.webp',
    itemName: 'Recliner Chair',
    location: 'Location I1',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Sold Out',
    addedBy: 'Personal',
    description: 'Comfortable recliner chair.',
    quantity: 0,
    pickupInstruction: ''
  },
  {
    image: 'images/ironbox.webp',
    itemName: 'Cordless Iron',
    location: 'Location J1',
    freeOrBorrowOrWanted: 'Free',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Convenient cordless iron.',
    quantity: 2,
    pickupInstruction: 'Pickup during weekdays.'
  },
  {
    image: 'images/table.jpg',
    itemName: 'Round Dining Table',
    location: 'Location K1',
    freeOrBorrowOrWanted: 'Borrow',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Volunteer',
    description: 'Classic round dining table.',
    quantity: 1,
    pickupInstruction: 'Pickup after 3 PM.'
  },
  {
    image: 'images/bucket.jpg',
    itemName: 'Metallic Paint Bucket',
    location: 'Location L1',
    freeOrBorrowOrWanted: 'Buy',
    foodOrNoFood: 'No Food',
    availability: 'Available',
    addedBy: 'Personal',
    description: 'Heavy-duty metallic paint bucket.',
    quantity: 2,
    pickupInstruction: 'Pickup before 5 PM.'
  }
];
export default cardData;
console.log(cardData);
