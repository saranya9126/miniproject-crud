const { PrismaClient } =require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.restaurent.createMany({
    data: [
      {
        restaurent_id: "R001",
        name: "Spice Hub",
        location: "Chennai",
        image_url: "https://example.com/spicehub.jpg",
        offers: "20% off on all orders",
      },
      {
        restaurent_id: "R002",
        name: "Food Fiesta",
        location: "Bangalore",
        image_url: "https://example.com/foodfiesta.jpg",
        offers: "Buy 1 Get 1 Free",
      },
      {
        restaurent_id: "R003",
        name: "Tandoori Treats",
        location: "Hyderabad",
        image_url: "https://example.com/tandoori.jpg",
        offers: "Flat 150 off",
      },
      {
        restaurent_id: "R004",
        name: "Burger Point",
        location: "Coimbatore",
        image_url: "https://example.com/burger.jpg",
        offers: "Free fries with combo",
      },
      {
        restaurent_id: "R005",
        name: "Pizza Palace",
        location: "Mumbai",
        image_url: "https://example.com/pizza.jpg",
        offers: "30% off on weekends",
      },
      {
        restaurent_id: "R006",
        name: "South Spice",
        location: "Madurai",
        image_url: "https://example.com/southspice.jpg",
        offers: "Special meals at 199",
      },
      {
        restaurent_id: "R007",
        name: "BBQ Nation",
        location: "Trichy",
        image_url: "https://example.com/bbq.jpg",
        offers: "Unlimited BBQ offer",
      },
      {
        restaurent_id: "R008",
        name: "Street Eats",
        location: "Salem",
        image_url: "https://example.com/street.jpg",
        offers: "Combo at 99",
      },
      {
        restaurent_id: "R009",
        name: "Veg Delight",
        location: "Erode",
        image_url: "https://example.com/veg.jpg",
        offers: "Pure veg special discount",
      },
      {
        restaurent_id: "R010",
        name: "Royal Biryani",
        location: "Vellore",
        image_url: "https://example.com/biryani.jpg",
        offers: "Free drink with biryani",
      },
    ],
  });

  console.log("Dummy restaurant data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
