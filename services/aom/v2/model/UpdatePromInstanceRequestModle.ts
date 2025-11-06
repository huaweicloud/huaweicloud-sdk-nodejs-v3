import { AggrPrometheusInfo } from './AggrPrometheusInfo';
import { PromLimits } from './PromLimits';


export class UpdatePromInstanceRequestModle {
    private 'prom_id'?: string;
    private 'prom_limits'?: PromLimits;
    private 'prom_name'?: string;
    private 'aggr_prometheus_info'?: Array<AggrPrometheusInfo>;
    public constructor(promId?: string) { 
        this['prom_id'] = promId;
    }
    public withPromId(promId: string): UpdatePromInstanceRequestModle {
        this['prom_id'] = promId;
        return this;
    }
    public set promId(promId: string  | undefined) {
        this['prom_id'] = promId;
    }
    public get promId(): string | undefined {
        return this['prom_id'];
    }
    public withPromLimits(promLimits: PromLimits): UpdatePromInstanceRequestModle {
        this['prom_limits'] = promLimits;
        return this;
    }
    public set promLimits(promLimits: PromLimits  | undefined) {
        this['prom_limits'] = promLimits;
    }
    public get promLimits(): PromLimits | undefined {
        return this['prom_limits'];
    }
    public withPromName(promName: string): UpdatePromInstanceRequestModle {
        this['prom_name'] = promName;
        return this;
    }
    public set promName(promName: string  | undefined) {
        this['prom_name'] = promName;
    }
    public get promName(): string | undefined {
        return this['prom_name'];
    }
    public withAggrPrometheusInfo(aggrPrometheusInfo: Array<AggrPrometheusInfo>): UpdatePromInstanceRequestModle {
        this['aggr_prometheus_info'] = aggrPrometheusInfo;
        return this;
    }
    public set aggrPrometheusInfo(aggrPrometheusInfo: Array<AggrPrometheusInfo>  | undefined) {
        this['aggr_prometheus_info'] = aggrPrometheusInfo;
    }
    public get aggrPrometheusInfo(): Array<AggrPrometheusInfo> | undefined {
        return this['aggr_prometheus_info'];
    }
}