import React from 'react';
import { AppBar, Checkbox, Grid, InputLabel, MenuItem, Paper, Select, Toolbar, Typography } from '@mui/material'
import { TextField, Button, FormControlLabel, RadioGroup, FormLabel, FormControl, Radio, CssBaseline } from '@mui/material'
import ResponsiveAppBar from 'src/components/ResponsiveAppBar';

import TransportGHG from 'src/components/Inventory/TansportGHG';
import MaterialGHG from 'src/components/Inventory/MaterialGHG';
import EquipmentGHG from 'src/components/Inventory/EquipmentGHG';
import SplitSection from 'src/components/SplitSection';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import LcaGHG from 'src/components/Inventory/LcaGHG';
import VehicleGHG from 'src/components/Inventory/VehicleGHG';

const Inventory = () => {
    return (
        <div>
            <div className='appbar'>
                <CssBaseline />
                <ResponsiveAppBar />
            </div>

            <div className='main-container'>

                <SplitSection 
                heading="Inventory"
                description="This inventory is a storehouse of all the research articles that have helped us to build our solution prototype. It conatins the citations, references, and embedded links to all of the hypotheses that aided us into curating, maintaining, and optimizing out datasets. "
                image="https://cdn.dribbble.com/users/1677926/screenshots/6797295/folder.gif"
                height="400px"
                imageHeight="100%"
                imageWidth="100%"
                />

                <AnimationOnScroll animateIn="animate__fadeInLeft" delay={300} animateOnce={true}>
                <TransportGHG
                    heading="Route Emission Estimator"
                    description="Transport heralds the development of a region. The demand for infrastructure augmentation increases with the region’s pursuit of development goals. The basic infrastructures required for the region’s economic growth are roads, railways, water and air connectivity. With the increase in economic activities, the dependence of fossil fuel based energy sources and consequent green house gas (GHG) emissions have increased rapidly in recent times. The transport sector in India consumes about 16.9% (36.5 mtoe: million tonnes of oil equivalent) of total energy (217 mtoe in 2005-06). Various energy sources used in this sector are coal, diesel, petroleum (gasoline) and electricity. Road, rail and air are responsible for emission of 80%, 13% and 6% respectively (TEDDY, 2006). Vehicular emissions account for about 60% of the GHG’s from various activities in India (Patankar, 1991).Globalization and liberalization policies of the government has spurted the economic activities. Consequent to this policy change are increase in urbanization and concentrated economic activities in certain load centers resulting in higher mobility. This fuelled the rapid increase in number of vehicles and traveling distance resulting in the higher consumption of energy with an average annual rate of 2.9%. During the last two decades, number of registered motor vehicles has increased dramatically from 5.4 million in 1980-81 to 72.7 million in 2003-04 (TEDDY, 2006). Energy consumption also varies with the modes of transport and public transport system has least average energy consumption per passenger kilometer (Singh, 2006). The urban population of India, which constitutes 28% of the total, is predominantly dependent on road transport. Around 80% of passenger and 60% of freight movement depend on road transport (MoF, 2000). Traffic composition of six mega cities of India (Delhi, Mumbai, Bangalore, Hyderabad, Chennai and Kolkata) shows that there is significant shift from the share of slow moving vehicles to fast moving vehicles and  public transport to private transport (Jalihal et al., 2005)."
                    image="https://pubs.acs.org/cms/10.1021/acs.est.0c06671/asset/images/large/es0c06671_0002.jpeg"
                // height="400px"
                />
                </AnimationOnScroll>
                
                <AnimationOnScroll animateIn="animate__fadeInRight" delay={300} animateOnce={true}>
                <MaterialGHG
                    heading="Material GHG Estimator"
                    description="With increasing urbanization and living standards of people in India, there is certainty that there will be a substantial increase in human activities such as transportation infrastructure development, and associated rise in energy demand. Thus, it is imperative that the technical knowhow regarding carbon emissions due to roadway infrastructure is advanced further to accomplish a sustainable environment. Thus, the objective of this research study was to develop a toolkit termed “Carbon Footprint Calculator” to quantify the carbon footprints of the different pavement systems used in highway construction. The tool developed as part of the study incorporated the major contributors of Greenhouse Gas (GHG) emissions including: pavement design aspects; material production and transportation from source to site; construction practices used in the various pavement systems and the expected vehicular operations during the pavement design life. A mathematical model to estimate the overall amount of GHG emissions in terms of total kgCO2 equivalent (kgCO2e) was also developed as a part of this study. In this study, the evaluation of GHGs in terms of carbon footprints for the different pavement systems used in Indian roadway construction was approached from a life cycle assessment perspective. It is envisioned that this tool could be well-utilized by design engineers to optimize pavement design methodology and construction practices in respect of creating a greener sustainable environment."
                    image="https://www.worldhighways.com/sites/ropl-wh/files/39428.jpg"
                />
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInLeft" delay={300} animateOnce={true}>
                <EquipmentGHG
                    heading="Equipment GHG Estimator"
                    description="The ERA Equipment CO2 Calculator is a tool to estimate the carbon footprint of construction equipment over its entire life cycle. It is applicable to all types of construction equipment, from mini excavators to wheel loaders and from generators to boom lifts (only hand tools are excluded). The calculator estimates the carbon footprint of a piece of equipment per hour of use. Expressing the results per hour of (active) use enables comparisons across different types of equipment and over a wide range of ownership scenarios. The ERA Equipment CO2 Calculator can be used to evaluate a single ownership period of a piece of equipment. The calculator’s results can for instance be used to: Investigate which part of the life cycle has the largest contribution to the carbon footprint of equipment; Compare different equipment use scenarios; Study the effects of changes to a baseline use scenario, such as measures to reduce the footprint; Evaluate the effects of alternative fuel consumption."
                    image="https://www.plantmachineryvehicles.com/cloud/2021/07/08/0yKxvLPm-ERA-Equipment-CO2-Calculator-v2-1200x675.png"
                />
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInRight" delay={300} animateOnce={true}>
                <LcaGHG
                    heading="LCA Estimator"
                    description="The LCA Estimator is a carbon footprint framework, to estimate total CO2 emissions during the full life cycle of any road in India. As a first step toward developing this framework, it was recognized that understanding all possible sources of direct and indirect CO2 emissions during the full life period of any road is vital. The possible sources of CO2 emissions (direct and indirect) during any road cycle are taken into consideration here. Two phases of any road are taken here: Road Construction Phase and Operation Phase. In Road Construction Phase, there are mainly 3 sources of CO2 emission - On-Site Electricity and Fuel Usage, Embodied Carbon in Construction Materials, and Carbon Loss from Vegetation Removed. GHG emissions can be calculated from the units of electricity purchased from grid during the construction, and from litres of petrol and diesel used in generators during the construction. These fossil fuels used during construction have life cycle CO2 emissions or embodied CO2 emissions released during the production and distribution of these fossil fuels, whose production also involves raw fuel extraction, transportation, processing, and distribution stages, all of which emit CO2. Further, any road consists of 4 layers - subgrade/road bed, sub-base course, base course and surface course. Different materials such as asphalt, concrete,etc. are used in the construction of these 4 layers. Hence, the respective emissions from different materials used during construction can be calculated using this tool. Lastly, in this phase, amount of vegetation removed is taken as the amount of biomass removed which is used as fuel wood, from which the GHG emissions can be calculated. All these emissions are added up to get the total emissions released during the Construction Phase. Next up is the Operation Phase, which mainly involves the GHG emissions released after the road is already built. Thus, the paramters taken here are the length of the road, the daily average traffic on the road, and the number of days the road is under operation. From these parameters, the total emissions are calculated in the operation phase per year."
                    image="https://ahssinsights.org/wp-content/uploads/2018/09/Vol16_Fig2.jpg"
                />
                </AnimationOnScroll>

                <AnimationOnScroll animateIn="animate__fadeInRight" delay={300} animateOnce={true}>
                <VehicleGHG
                    heading="Vehicle Emission Estimator"
                    description="This prototype is based on a kaggle dataset. We aim to predict the amount of carbon dioxide emitting from different cars using supervised learning techniques (specifically linear regression is used here). Linear Regression is a widely used supervised learning algorithm which helps in predicting continuous numerical outputs."
                    image="data:image/png;base64,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"
                />
                </AnimationOnScroll>

            </div>
        </div>
    )
}

export default Inventory;
