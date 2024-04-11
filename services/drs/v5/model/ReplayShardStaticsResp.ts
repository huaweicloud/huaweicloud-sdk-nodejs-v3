

export class ReplayShardStaticsResp {
    public time?: string;
    public total?: number;
    public finish?: number;
    public abnormal?: number;
    public slow?: number;
    public constructor(time?: string, total?: number, finish?: number, abnormal?: number, slow?: number) { 
        this['time'] = time;
        this['total'] = total;
        this['finish'] = finish;
        this['abnormal'] = abnormal;
        this['slow'] = slow;
    }
    public withTime(time: string): ReplayShardStaticsResp {
        this['time'] = time;
        return this;
    }
    public withTotal(total: number): ReplayShardStaticsResp {
        this['total'] = total;
        return this;
    }
    public withFinish(finish: number): ReplayShardStaticsResp {
        this['finish'] = finish;
        return this;
    }
    public withAbnormal(abnormal: number): ReplayShardStaticsResp {
        this['abnormal'] = abnormal;
        return this;
    }
    public withSlow(slow: number): ReplayShardStaticsResp {
        this['slow'] = slow;
        return this;
    }
}