interface tableType {
    name?: string;
    todayBuy?: number;
    monthBuy?: number;
    totalBuy?: number;
    xData?: string[];
    series?: seriesType[];
}
interface orderType {
    date?: string[];
    data?: Array<{ [key: string]: number }>;
    xData?: string[];
    series?: seriesType[];
}

interface userType {
    xData?: string[];
    date?: string;
    new?: number;
    active?: number;
    series?: seriesType[];
}
type videoType = {
    name?: string;
    value?: number;
    series?: seriesType[];
};

interface dataType {
    data: {
        tableData?: tableType;
        orderData: orderType;
        userData: userType;
        videoData: videoType;
    };
}
interface seriesType {
    name?: string;
    data?: number[];
    type?: string;
}

type EChartsOption = echarts.EChartsOption;

interface ChartData {
    xData?: string[];
    series: seriesType[];
}

interface DataProps {
    style: React.CSSProperties;
    chartData: ChartData;
    isAxisChart?: boolean;
}

interface XAXisOption {
    type: string;
    boundaryGap: boolean;
    data: string[];
}
