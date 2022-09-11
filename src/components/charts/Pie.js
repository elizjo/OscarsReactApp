import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const Donut = (props) => {

        const {dataUsed} = props

        return (
            <ResponsiveContainer>
                <PieChart width = {400} height = {400}>
                    <Pie
                        isAnimationActive = {true}
                        data = {dataUsed}
                        dataKey = "value"
                        nameKey = "status"
                        cx = "50%"
                        cy = "50%"
                        innerRadius = {40}
                        outerRadius = {80}
                        fill = "color"
                        label
                    />
                </PieChart>
            </ResponsiveContainer>
        );
}

export default Donut;

