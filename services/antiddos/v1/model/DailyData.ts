

export class DailyData {
    private 'period_start'?: number;
    private 'bps_in'?: number;
    private 'bps_attack'?: number;
    private 'total_bps'?: number;
    private 'pps_in'?: number;
    private 'pps_attack'?: number;
    private 'total_pps'?: number;
    public constructor(periodStart?: number, bpsIn?: number, bpsAttack?: number, totalBps?: number, ppsIn?: number, ppsAttack?: number, totalPps?: number) { 
        this['period_start'] = periodStart;
        this['bps_in'] = bpsIn;
        this['bps_attack'] = bpsAttack;
        this['total_bps'] = totalBps;
        this['pps_in'] = ppsIn;
        this['pps_attack'] = ppsAttack;
        this['total_pps'] = totalPps;
    }
    public withPeriodStart(periodStart: number): DailyData {
        this['period_start'] = periodStart;
        return this;
    }
    public set periodStart(periodStart: number  | undefined) {
        this['period_start'] = periodStart;
    }
    public get periodStart(): number | undefined {
        return this['period_start'];
    }
    public withBpsIn(bpsIn: number): DailyData {
        this['bps_in'] = bpsIn;
        return this;
    }
    public set bpsIn(bpsIn: number  | undefined) {
        this['bps_in'] = bpsIn;
    }
    public get bpsIn(): number | undefined {
        return this['bps_in'];
    }
    public withBpsAttack(bpsAttack: number): DailyData {
        this['bps_attack'] = bpsAttack;
        return this;
    }
    public set bpsAttack(bpsAttack: number  | undefined) {
        this['bps_attack'] = bpsAttack;
    }
    public get bpsAttack(): number | undefined {
        return this['bps_attack'];
    }
    public withTotalBps(totalBps: number): DailyData {
        this['total_bps'] = totalBps;
        return this;
    }
    public set totalBps(totalBps: number  | undefined) {
        this['total_bps'] = totalBps;
    }
    public get totalBps(): number | undefined {
        return this['total_bps'];
    }
    public withPpsIn(ppsIn: number): DailyData {
        this['pps_in'] = ppsIn;
        return this;
    }
    public set ppsIn(ppsIn: number  | undefined) {
        this['pps_in'] = ppsIn;
    }
    public get ppsIn(): number | undefined {
        return this['pps_in'];
    }
    public withPpsAttack(ppsAttack: number): DailyData {
        this['pps_attack'] = ppsAttack;
        return this;
    }
    public set ppsAttack(ppsAttack: number  | undefined) {
        this['pps_attack'] = ppsAttack;
    }
    public get ppsAttack(): number | undefined {
        return this['pps_attack'];
    }
    public withTotalPps(totalPps: number): DailyData {
        this['total_pps'] = totalPps;
        return this;
    }
    public set totalPps(totalPps: number  | undefined) {
        this['total_pps'] = totalPps;
    }
    public get totalPps(): number | undefined {
        return this['total_pps'];
    }
}