import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
} from "@progress/kendo-react-charts";

import { COLORS } from "../../constants";

const renderTooltip = context => {
    const { category, value } = context.point || context;
    return (
        <div>
            {category}: {value}%
        </div>
    );
};

const Oscars2022Donut = [
    {
        status: "Negative",
        value: 38,
        color: COLORS.Negative,
    },
    {
        status: "Neutral",
        value: 12,
        color: COLORS.Neutral,
    },
    {
        status: "Positive",
        value: 49,
        color: COLORS.Positive,
    }

];

//shows label for each item
const labelContent = e => e.category;

const Charts = props => {
    return (
        // container
        <Chart>
            <ChartTitle text = "Oscars 2022 Sentiment Breakdown"/>
            <ChartLegend visible={false} />
            <ChartTooltip render = {renderTooltip} />
            {/* main components */}
            <ChartSeries>
                <ChartSeriesItem
                    type="donut"
                    data = {Oscars2022Donut}
                    categoryField="status"
                    field="value"
                >
                <ChartSeriesLabels
                    color= "#fff"
                    background= "none"
                    content={labelContent}
                />
                </ChartSeriesItem>
            </ChartSeries>
        </Chart>
    );
};

export default Charts;