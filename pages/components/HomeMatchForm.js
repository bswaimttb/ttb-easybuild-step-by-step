import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Label } from "./ui/label";
import { Select, SelectItem } from "./ui/select";
import { MultiSelect } from "./ui/multiselect";


const styleOptions = [
  "Farmhouse",
  "Modern",
  "Ranch",
  "Craftsman",
  "Traditional",
  "Cottage",
  "Contemporary",
  "Colonial"
];

const mockResults = [
  { name: "The Cedar Grove", match: 92, sqft: 1800, beds: 3, baths: 2.5 },
  { name: "Hilltop Haven", match: 88, sqft: 1600, beds: 3, baths: 2 },
  { name: "Sunset Ridge", match: 84, sqft: 2000, beds: 4, baths: 3 }
];

export default function HomeMatchForm() {
  const [formData, setFormData] = useState({
    squareFootageMin: "",
    squareFootageMax: "",
    bedrooms: "",
    bathrooms: "",
    garageSpaces: "",
    styles: [],
    budgetMin: "",
    budgetMax: "",
    stories: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const rangeOptions = (min, max, step = 1) => {
    const items = [];
    for (let i = min; i <= max; i += step) {
      items.push(
        <SelectItem key={i} value={i.toString()}>
          {i}
        </SelectItem>
      );
    }
    return items;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto mt-10 space-y-6">
        <h2 className="text-2xl font-bold text-center">🏡 Thanks for submitting!</h2>
        <p className="text-center">Here are a few homes that match your preferences:</p>
        {mockResults.map((home, idx) => (
          <Card key={idx}>
            <CardContent className="p-4 space-y-1">
              <h3 className="text-lg font-semibold">{home.name}</h3>
              <p>Match Score: {home.match}%</p>
              <p>
                {home.sqft} SqFt | {home.beds} Beds | {home.baths} Baths
              </p>
            </CardContent>
          </Card>
        ))}
        <div className="text-center">
          <Button onClick={() => setSubmitted(false)}>Start Over</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card>
        <CardContent className="p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Min Square Footage</Label>
              <Input
                name="squareFootageMin"
                value={formData.squareFootageMin}
                onChange={(e) => handleChange("squareFootageMin", e.target.value)}
              />
            </div>
            <div>
              <Label>Max Square Footage</Label>
              <Input
                name="squareFootageMax"
                value={formData.squareFootageMax}
                onChange={(e) => handleChange("squareFootageMax", e.target.value)}
              />
            </div>
            <div>
              <Label>Bedrooms</Label>
              <Select onChange={(e) => handleChange("bedrooms", e.target.value)}>
                {rangeOptions(1, 6)}
              </Select>
            </div>
            <div>
              <Label>Bathrooms</Label>
              <Select onChange={(e) => handleChange("bathrooms", e.target.value)}>
                {rangeOptions(1, 5, 0.5)}
              </Select>
            </div>
            <div>
              <Label>Garage Spaces</Label>
              <Select onChange={(e) => handleChange("garageSpaces", e.target.value)}>
                {rangeOptions(0, 4)}
              </Select>
            </div>
            <div>
              <Label>Preferred Styles (select multiple)</Label>
              <MultiSelect
                options={styleOptions}
                selected={formData.styles}
                onChange={(values) => handleChange("styles", values)}
              />
            </div>
            <div>
              <Label>Min Budget</Label>
              <Input
                name="budgetMin"
                value={formData.budgetMin}
                onChange={(e) => handleChange("budgetMin", e.target.value)}
              />
            </div>
            <div>
              <Label>Max Budget</Label>
              <Input
                name="budgetMax"
                value={formData.budgetMax}
                onChange={(e) => handleChange("budgetMax", e.target.value)}
              />
            </div>
            <div>
              <Label>Stories</Label>
              <Input
                name="stories"
                value={formData.stories}
                onChange={(e) => handleChange("stories", e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Find Matching Homes
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
