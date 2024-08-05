interface tableType {
    name?: string;
    todayBuy?: number;
    monthBuy?: number;
    totalBuy?: number;
    xData?: string[];
    series?: seriesType[];
}
interface countType {
    name: string;
    value: number;
    icon: string;
    color: string;
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
    id?: number;
    name?: string;
    age?: number;
    address?: string;
    phone?: string;
    email?: string;
    createTime?: string;
    updateTime?: string;
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
        countData?: countType[];
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
