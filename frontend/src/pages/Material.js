import {
  AppBar,
  Checkbox,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  TextField,
  Button,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  FormControl,
  Radio,
  CssBaseline,
} from "@mui/material";
import { Box } from "@mui/system";
import MUIDataTable from "mui-datatables";

import PieChart from "../components/PieChart";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from "react";
import "./equipment.css";
import "./Material.css";
import axios from "axios";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import SplitSection from "../components/SplitSection";

import materialDetails from "../data/material_estimator";

const Material = () => {
  const [equip, setEquip] = React.useState("");
  const [weight, setWeight] = useState("");
  const [chartDataEmission, setChartDataEmission] = useState([]);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [emission, setEmission] = useState(0);
  // const planPieChart=[];
  const [planPieChart,setPlanPieChart]=useState([]);

  useEffect(()=>{
    setPlanPieChart([]);
    compareListMaterial?.map((data,id)=> {
      var tot=0;
      data.map(val=>{
          tot+=val.value;
      })

      console.log("DIe",data);
      
      setPlanPieChart((prev) => [
        ...prev,
        { argument: `Plan ${id}`, value: tot },
      ]);

      // planPieChart.push(
      //   { argument: data.argument, value: data.value },
      // )

  })
  },[]);
  var bestPackage = null;
    var minCostEmission= 1000000000000;
  var compareListMaterial = [[]];

  compareListMaterial=JSON.parse(localStorage.getItem('compareListMaterial'));


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

  const addToCompareList = () =>{

    console.log("StringValue",data);
    
    var currentVal=[];
    
    {
        data.map((d) => {

            currentVal.push(                    {
                argument: d[1],value: d[3]
            }
            )
           
        });
    }

    if(!compareListMaterial)compareListMaterial=[[]]
    console.log("PREvious Value",compareListMaterial);
    compareListMaterial.push(currentVal);
    
    console.log("CurrentValue",currentVal);

    localStorage.setItem('compareListMaterial', JSON.stringify(compareListMaterial));

    window.location.reload();
    // setTimeout(()=>{
    // compareList=JSON.parse(localStorage.getItem('compareList'));

    // },1000);

}


const clearCompareList = ()=>{
    localStorage.removeItem("compareListMaterial");
    window.location.reload();
}
  return (
    <>
      <div className="appbar">
        <CssBaseline />
        <ResponsiveAppBar />
      </div>
      <div className="main-container">
        <SplitSection
          heading="Material GHG Estimator"
          description="The ThreeAres Material Estimator allows the user to generate emission reports that estimate the carbon dioxide emissions associated with materials used in highway constructions projects. Materials are classified according to MDOT's Standard Specifications for Construction's Division 9  material classifications. The tool estimates cradle to gate emissions and can be used to differentiate impacts of using composite materials that make up the roadway."
          image="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1239.jpg"
          routepath="#calculator-div"
          height="90vh"
          border="30px solid white"
        />
        <div className="main-content" id="calculator-div"
          style={{
            margin: "20px",
            border: "1px solid #008000"
          }}
        >
          <Paper elevation={0}
          >
            <Box
              display="flex"
              flexDirection={matches ? 'row' : 'column'}
              justifyContent="center"
              alignItems="center"
            // minHeight="100vh"
            >
              <Grid
                container
                className="form-grid"
                xs={12}
                lg={6}
                direction={"column"}
                spacing={5}
                justifyContent="center"
              >
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Materials
                    </InputLabel>
                    <Select
                      labelId="Materials"
                      id="demo-simple-select"
                      value={equip}
                      label="Material"
                      onChange={handleChange}

                      sx={{
                        // maxWidth: "60vw",
                        overflow: "hidden"
                      }}
                    >
                      {materialDetails.map((item) => (
                        <MenuItem value={item}>
                          {item["Material Description"]}
                        </MenuItem>
                      ))}
                      {/* <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className="textfield"
                    style={{
                      width: "100%",

                    }}


                    size="normal"
                    required
                    id="outlined-basic"
                    label="Weight"
                    variant="outlined"
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value);
                    }}
                  />
                </Grid>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0px"
                  }}
                >
                  <Button
                    id="calculate-btn"
                    style={{
                      fontFamily: "montserrat",
                      width: "250px",
                      marginLeft: "0px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      background: "white",
                      color: "#008000",
                      boxShadow: "none",
                      border: "1px solid #008000",
                      borderRadius: "0px",
                      transition: "0.4s ease",

                    }}
                    onClick={addNew}
                  >
                    ADD New Emission
                  </Button>

                  <Button
                    id="calculate-btn"
                    style={{
                      fontFamily: "montserrat",
                      width: "250px",
                      marginLeft: "0px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      background: "white",
                      color: "#008000",
                      boxShadow: "none",
                      border: "1px solid #008000",
                      borderRadius: "0px",
                      transition: "0.4s ease",
                    }}
                    onClick={calculate}
                  >
                    Calculate
                  </Button>
                  <Button  style={{
                                            fontFamily: "montserrat",
                                            width: "250px",
                                            marginLeft: "0px",
                                            marginTop: "20px",
                                            marginBottom: "20px",
                                            background: "white",
                                            color: "#008000",
                                            boxShadow: "none",
                                            border: "1px solid #008000",
                                            borderRadius: "0px",
                                            transition: "0.4s ease",
                                        }}
                                        onClick={addToCompareList}
                                        >Add To Compare List</Button>
                                    <Button style={{
                                            fontFamily: "montserrat",
                                            width: "250px",
                                            marginLeft: "0px",
                                            marginTop: "20px",
                                            marginBottom: "20px",
                                            background: "white",
                                            color: "#008000",
                                            boxShadow: "none",
                                            border: "1px solid #008000",
                                            borderRadius: "0px",
                                            transition: "0.4s ease",
                                        }}
                                        onClick={clearCompareList}
                                        > Clear Comparison</Button>
                </div>
              </Grid>

              {/* test */}
              <Grid
                container
                className="form-grid"
                xs={12}
                sm={12}
                lg={6}
                // direction={"column"}
                // spacing={5}
                justifyContent="center"

              >
                <Grid item xs={12} sm={12} lg={6}

                >
                  <TextField
                    className="textfield"
                    style={{
                      // margin: "20px",
                      width: "100%",
                    }}

                    id="outlined-basic"
                    label="Emissions"
                    variant="outlined"
                    value={emission}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              background: "white",
            }}
          >

          </div>
        </div>
      </div>

      <div style={{
        margin: "20px"
      }}>
        <div style={{
          border: "1px solid #008000"
        }}>

          <MUIDataTable

            title={"Emission List"}

            data={data}
            columns={columns}
            options={options}

            style={{
              fontFamily: "Montserrat !important",
              marginTop: "10px"
            }}
          />

        </div>
      </div>

      <div className="whitespace" style={{
        height: "20px"
      }}></div>

      {chartDataEmission.length > 0 && (
        <>
          <div style={{
            margin: "20px",
          }}>
            <div style={{


              padding: "10px",
              border: "1px solid #008000",
            }}>
              <PieChart
                data={chartDataEmission}
                label="Emission Rate PieChart"
              />
            </div>
          </div>

          <div className="whitespace" style={{
            height: "20px"
          }}></div>
        </>

      )}
       {
            compareListMaterial?.length > 0 && (  <div style={{
              margin: "20px"
            }}>
                <h3>Compare List</h3>
                <div id="compareList"
                //  style={{display: 'flex',flexDirection:'row',justifyContent:"space-between"}}
                  >
                    {
                        compareListMaterial?.map((data,id)=> {
                            var tot=0;
                            data.map(val=>{
                                tot+=val.value;
                            })
                            
                            // setPlanPieChart((prev) => [
                            //   ...prev,
                            //   { argument: data.argument, value: data.value },
                            // ]);

                            // planPieChart.push(
                            //   { argument: data.argument, value: data.value },
                            // )

                            if(  data.length>0 && tot<minCostEmission){
                                minCostEmission=tot;
                                bestPackage=(id);
                            }
                            return data.length>0 &&  <div style={{
                                // background: "blue",
                                // padding: "10px",
                                border: "1px solid #008000",
                            }}>
                                <PieChart
                                    data={data}
                                    label={`Plan ${id}`}
                                />
                                {

                                    <p>{tot}</p>
                                }
                            </div>
                        })

                    }
                </div>
               {bestPackage && ( <PieChart
                                    data={planPieChart}
                                    label={`Plan Comparison`}
                                />)}
               {bestPackage && ( <p>Best Plan to use is :  Plan {bestPackage}</p>)}

            </div>
            )
        }   
    </>
  );
};

export default Material;
