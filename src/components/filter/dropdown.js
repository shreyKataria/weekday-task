import React, { useState } from "react";
import {
  Box,
  Chip,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Dropdown = ({ data, title }) => {
  const [options, setOptions] = useState(data);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  const handleDelete = (item) => {
    // Remove the item from the list of selected items
    setSelectedOptions((prev) => prev.filter((selected) => selected !== item));
  };

  return (
    <Box className="box">
      <FormControl fullWidth>
        <InputLabel>{title}</InputLabel>
        <Select
          multiple
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput label="Fruits" />}
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
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
