

export class TrendVO {
    private 'agg_time'?: number;
    public bps?: number;
    public deny?: number;
    private 'in_bps'?: number;
    private 'out_bps'?: number;
    public permit?: number;
    public constructor() { 
    }
    public withAggTime(aggTime: number): TrendVO {
        this['agg_time'] = aggTime;
        return this;
    }
    public set aggTime(aggTime: number  | undefined) {
        this['agg_time'] = aggTime;
    }
    public get aggTime(): number | undefined {
        return this['agg_time'];
    }
    public withBps(bps: number): TrendVO {
        this['bps'] = bps;
        return this;
    }
    public withDeny(deny: number): TrendVO {
        this['deny'] = deny;
        return this;
    }
    public withInBps(inBps: number): TrendVO {
        this['in_bps'] = inBps;
        return this;
    }
    public set inBps(inBps: number  | undefined) {
        this['in_bps'] = inBps;
    }
    public get inBps(): number | undefined {
        return this['in_bps'];
    }
    public withOutBps(outBps: number): TrendVO {
        this['out_bps'] = outBps;
        return this;
    }
    public set outBps(outBps: number  | undefined) {
        this['out_bps'] = outBps;
    }
    public get outBps(): number | undefined {
        return this['out_bps'];
    }
    public withPermit(permit: number): TrendVO {
        this['permit'] = permit;
        return this;
    }
}