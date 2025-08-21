import { ItemVO } from './ItemVO';
import { Overview } from './Overview';
import { TrendVO } from './TrendVO';
import { Vpc } from './Vpc';


export class VpcReport {
    public app?: Array<ItemVO>;
    private 'dst_ip'?: Array<ItemVO>;
    public overview?: Overview;
    private 'src_ip'?: Array<ItemVO>;
    private 'traffic_trend'?: Array<TrendVO>;
    public vpc?: Vpc;
    public constructor() { 
    }
    public withApp(app: Array<ItemVO>): VpcReport {
        this['app'] = app;
        return this;
    }
    public withDstIp(dstIp: Array<ItemVO>): VpcReport {
        this['dst_ip'] = dstIp;
        return this;
    }
    public set dstIp(dstIp: Array<ItemVO>  | undefined) {
        this['dst_ip'] = dstIp;
    }
    public get dstIp(): Array<ItemVO> | undefined {
        return this['dst_ip'];
    }
    public withOverview(overview: Overview): VpcReport {
        this['overview'] = overview;
        return this;
    }
    public withSrcIp(srcIp: Array<ItemVO>): VpcReport {
        this['src_ip'] = srcIp;
        return this;
    }
    public set srcIp(srcIp: Array<ItemVO>  | undefined) {
        this['src_ip'] = srcIp;
    }
    public get srcIp(): Array<ItemVO> | undefined {
        return this['src_ip'];
    }
    public withTrafficTrend(trafficTrend: Array<TrendVO>): VpcReport {
        this['traffic_trend'] = trafficTrend;
        return this;
    }
    public set trafficTrend(trafficTrend: Array<TrendVO>  | undefined) {
        this['traffic_trend'] = trafficTrend;
    }
    public get trafficTrend(): Array<TrendVO> | undefined {
        return this['traffic_trend'];
    }
    public withVpc(vpc: Vpc): VpcReport {
        this['vpc'] = vpc;
        return this;
    }
}