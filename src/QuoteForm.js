import { useState } from 'react';
import { Button } from './components/ui/button';  // Relative import for Button
import { Input } from './components/ui/input';    // Relative import for Input
import { Label } from './components/ui/label';    // Relative import for Label
import { Select, SelectItem } from './components/ui/select';  // Relative import for Select and SelectItem

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    transmission: '',
    fuelType: '',
    previousOwners: '',
    color: '',
    condition: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="brand">Brand</Label>
          <Input id="brand" name="brand" value={formData.brand} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="model">Model</Label>
          <Input id="model" name="model" value={formData.model} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="year">Year</Label>
          <Input id="year" name="year" type="number" value={formData.year} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="mileage">Mileage (KM)</Label>
          <Input id="mileage" name="mileage" type="number" value={formData.mileage} onChange={handleInputChange} required />
        </div>
        <div>
          <Label htmlFor="transmission">Transmission Type</Label>
          <Select onValueChange={(value) => handleSelectChange('transmission', value)}>
            <SelectItem value="automatic">Automatic</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
          </Select>
        </div>
        <div>
          <Label htmlFor="fuelType">Fuel Type</Label>
          <Select onValueChange={(value) => handleSelectChange('fuelType', value)}>
            <SelectItem value="petrol">Petrol</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
          </Select>
        </div>
        <div>
          <Label htmlFor="condition">Condition</Label>
          <Select onValueChange={(value) => handleSelectChange('condition', value)}>
            <SelectItem value="excellent">Excellent</SelectItem>
            <SelectItem value="good">Good</SelectItem>
            <SelectItem value="fair">Fair</SelectItem>
            <SelectItem value="poor">Poor</SelectItem>
          </Select>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
