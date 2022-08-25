import React from 'react'
import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Toolbar, Typography} from "@mui/material";
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline} from "@mui/material";
import { Box } from "@mui/system";
import MUIDataTable from "mui-datatables";
import PieChart from "src/components/PieChart";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from "react";
import "./equipment.css";
import "./Material.css";
import axios from "axios";
import ResponsiveAppBar from "src/components/ResponsiveAppBar";
import SplitSection from "src/components/SplitSection";
import materialDetails from "../data/material_estimator";
  
const Material = () => {
const [equip, setEquip] = React.useState("");
const [weight, setWeight] = useState("");
const [chartDataEmission, setChartDataEmission] = useState([]);
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.up('sm'));
const [emission, setEmission] = useState(0);
  
var emissions_rate = 0;
const columns = [
    "Division",
    "Material Name",
    "Weight",
    "Emissions(MT of CO2)",
];
const [data, setData] = useState([]);

const options = {
    selectableRows: false,
    elevation: 0
};

const handleChange = (event) => {
    setEquip(event.target.value);
};
const calculate = () => {
    setEmission(0);
    setChartDataEmission([]);
    {
    data.map((d) => {
        setEmission((prev) => d[3] + prev);
        console.log(d[5]);
        setChartDataEmission((prev) => [
        ...prev,
        { argument: d[1], value: d[3] },
        ]);
    });
    }
};
const addNew = ({ id }) => {
    setData((previous) => [
    ...previous,
    [
        equip["Div ID"],
        equip["Material Description"],
        weight,
        weight * equip["Published Factor"],
    ],
    ]);
};
  