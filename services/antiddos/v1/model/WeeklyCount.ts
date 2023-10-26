

export class WeeklyCount {
    private 'ddos_intercept_times'?: number;
    private 'ddos_blackhole_times'?: number;
    private 'max_attack_bps'?: number;
    private 'max_attack_conns'?: number;
    private 'period_start_date'?: number;
    public constructor(ddosInterceptTimes?: number, ddosBlackholeTimes?: number, maxAttackBps?: number, maxAttackConns?: number, periodStartDate?: number) { 
        this['ddos_intercept_times'] = ddosInterceptTimes;
        this['ddos_blackhole_times'] = ddosBlackholeTimes;
        this['max_attack_bps'] = maxAttackBps;
        this['max_attack_conns'] = maxAttackConns;
        this['period_start_date'] = periodStartDate;
    }
    public withDdosInterceptTimes(ddosInterceptTimes: number): WeeklyCount {
        this['ddos_intercept_times'] = ddosInterceptTimes;
        return this;
    }
    public set ddosInterceptTimes(ddosInterceptTimes: number  | undefined) {
        this['ddos_intercept_times'] = ddosInterceptTimes;
    }
    public get ddosInterceptTimes(): number | undefined {
        return this['ddos_intercept_times'];
    }
    public withDdosBlackholeTimes(ddosBlackholeTimes: number): WeeklyCount {
        this['ddos_blackhole_times'] = ddosBlackholeTimes;
        return this;
    }
    public set ddosBlackholeTimes(ddosBlackholeTimes: number  | undefined) {
        this['ddos_blackhole_times'] = ddosBlackholeTimes;
    }
    public get ddosBlackholeTimes(): number | undefined {
        return this['ddos_blackhole_times'];
    }
    public withMaxAttackBps(maxAttackBps: number): WeeklyCount {
        this['max_attack_bps'] = maxAttackBps;
        return this;
    }
    public set maxAttackBps(maxAttackBps: number  | undefined) {
        this['max_attack_bps'] = maxAttackBps;
    }
    public get maxAttackBps(): number | undefined {
        return this['max_attack_bps'];
    }
    public withMaxAttackConns(maxAttackConns: number): WeeklyCount {
        this['max_attack_conns'] = maxAttackConns;
        return this;
    }
    public set maxAttackConns(maxAttackConns: number  | undefined) {
        this['max_attack_conns'] = maxAttackConns;
    }
    public get maxAttackConns(): number | undefined {
        return this['max_attack_conns'];
    }
    public withPeriodStartDate(periodStartDate: number): WeeklyCount {
        this['period_start_date'] = periodStartDate;
        return this;
    }
    public set periodStartDate(periodStartDate: number  | undefined) {
        this['period_start_date'] = periodStartDate;
    }
    public get periodStartDate(): number | undefined {
        return this['period_start_date'];
    }
}