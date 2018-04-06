const express = require("express");
const serve = require("express-static");

const app = express();

app.post("/add-to-cart", (req, res) => res.status(201));

app.get("/parts", (req, res) =>
  res.send({
    heads: [
      {
        id: 1,
        description:
          "A robot head with an external antenna for better wireless communication.",
        title: "Antenna",
        src: "/api/images/head1.png",
        type: "heads",
        cost: 125.5
      },
      {
        id: 2,
        description: "A robot head with a mouth to allow verbal communication",
        title: "Speaker",
        src: "/api/images/head2.png",
        cost: 95.0,
        type: "heads",
        onSale: true
      }
    ],
    arms: [
      {
        id: 1,
        description: "An arm that allows the robot to pick up items.",
        title: "Grabber",
        src: "/api/images/arm1.png",
        type: "arms",
        cost: 65
      },
      {
        id: 2,
        description: "An arm with an syringe and needle injector.",
        title: "Injector",
        src: "/api/images/arm2.png",
        type: "arms",
        cost: 70
      }
    ],
    torsos: [
      {
        id: 1,
        description: "A bulky body with vents for heat distribution.",
        title: "Bulky 1",
        src: "/api/images/torso1.png",
        type: "torsos",
        cost: 95
      },
      {
        id: 2,
        description: "A bulky body with vents for heat distribution.",
        title: "Bulky 2",
        src: "/api/images/torso2.png",
        type: "torsos",
        cost: 85
      }
    ],
    bases: [
      {
        id: 1,
        description: "An two legged-base with articulated legs.",
        title: "Articulated 1",
        src: "/api/images/base1.png",
        type: "bases",
        cost: 90
      },
      {
        id: 2,
        description: "An two legged-base with articulated legs.",
        title: "Articulated 2",
        src: "/api/images/base2.png",
        type: "bases",
        cost: 80
      }
    ]
  })
);

app.use("/images", serve(__dirname + "/images"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
