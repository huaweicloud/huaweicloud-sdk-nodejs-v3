import { Eip } from './Eip';
import { In2Out } from './In2Out';
import { Out2in } from './Out2in';
import { Overview } from './Overview';
import { TrendVO } from './TrendVO';


export class InternetReport {
    public eip?: Eip;
    public in2out?: In2Out;
    public out2in?: Out2in;
    public overview?: Overview;
    private 'traffic_trend'?: Array<TrendVO>;
    public constructor() { 
    }
    public withEip(eip: Eip): InternetReport {
        this['eip'] = eip;
        return this;
    }
    public withIn2out(in2out: In2Out): InternetReport {
        this['in2out'] = in2out;
        return this;
    }
    public withOut2in(out2in: Out2in): InternetReport {
        this['out2in'] = out2in;
        return this;
    }
    public withOverview(overview: Overview): InternetReport {
        this['overview'] = overview;
        return this;
    }
    public withTrafficTrend(trafficTrend: Array<TrendVO>): InternetReport {
        this['traffic_trend'] = trafficTrend;
        return this;
    }
    public set trafficTrend(trafficTrend: Array<TrendVO>  | undefined) {
        this['traffic_trend'] = trafficTrend;
    }
    public get trafficTrend(): Array<TrendVO> | undefined {
        return this['traffic_trend'];
    }
}