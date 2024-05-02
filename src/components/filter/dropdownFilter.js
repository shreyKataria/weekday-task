import React, { useState } from "react";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  ListSubheader,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DropdownFilter = ({ data, title }) => {
  const [availableOptions, setAvailableOptions] = useState(data);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    const newSelection = event.target.value;

    const newlySelected = newSelection.filter(
      (item) => !selectedOptions.includes(item)
    );

    const updatedAvailableOptions = { ...availableOptions };

    newlySelected.forEach((item) => {
      Object.keys(updatedAvailableOptions).forEach((key) => {
        updatedAvailableOptions[key] = updatedAvailableOptions[key].filter(
          (option) => option !== item
        );
      });
    });

    setAvailableOptions(updatedAvailableOptions);
    setSelectedOptions(newSelection);
  };

  const handleDelete = (item) => {
    console.log(`Deleting: ${item}`);

    // Remove item from selected options
    const updatedSelectedOptions = selectedOptions.filter(
      (selected) => selected !== item
    );

    // Add item back to the corresponding group in available options
    const updatedAvailableOptions = { ...availableOptions };

    const group = Object.keys(updatedAvailableOptions).find(
      (key) => !updatedAvailableOptions[key].includes(item)
    );

    if (group) {
      updatedAvailableOptions[group] = [
        ...updatedAvailableOptions[group],
        item,
      ];
    }

    setSelectedOptions(updatedSelectedOptions); // Update state with new selected options
    setAvailableOptions(updatedAvailableOptions); // Update state with new available options
  };

  const renderOptions = () => {
    const menuItems = [];

    Object.entries(availableOptions).forEach(([group, items]) => {
      menuItems.push(<ListSubheader key={group}>{group}</ListSubheader>);
      items.forEach((item) => {
        menuItems.push(
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        );
      });
    });

    return menuItems;
  };

  return (
    <Box className="box">
      <FormControl fullWidth>
        <InputLabel>{title}</InputLabel>
        <Select
          multiple
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput label="Choose Items" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  onDelete={() => handleDelete(value)}
                  deleteIcon={<DeleteIcon />}
                />
              ))}
            </Box>
          )}>
          {renderOptions()}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropdownFilter;
