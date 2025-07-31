

export class AttackTrendRespBody {
    private 'deny_count'?: number;
    private 'permit_count'?: number;
    public time?: number;
    public constructor() { 
    }
    public withDenyCount(denyCount: number): AttackTrendRespBody {
        this['deny_count'] = denyCount;
        return this;
    }
    public set denyCount(denyCount: number  | undefined) {
        this['deny_count'] = denyCount;
    }
    public get denyCount(): number | undefined {
        return this['deny_count'];
    }
    public withPermitCount(permitCount: number): AttackTrendRespBody {
        this['permit_count'] = permitCount;
        return this;
    }
    public set permitCount(permitCount: number  | undefined) {
        this['permit_count'] = permitCount;
    }
    public get permitCount(): number | undefined {
        return this['permit_count'];
    }
    public withTime(time: number): AttackTrendRespBody {
        this['time'] = time;
        return this;
    }
}