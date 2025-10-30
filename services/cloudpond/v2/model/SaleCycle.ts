import { PayMode } from './PayMode';
import { PeriodType } from './PeriodType';


export class SaleCycle {
    private 'pay_mode'?: PayMode;
    private 'period_type'?: PeriodType;
    private 'period_num'?: number;
    public constructor() { 
    }
    public withPayMode(payMode: PayMode): SaleCycle {
        this['pay_mode'] = payMode;
        return this;
    }
    public set payMode(payMode: PayMode  | undefined) {
        this['pay_mode'] = payMode;
    }
    public get payMode(): PayMode | undefined {
        return this['pay_mode'];
    }
    public withPeriodType(periodType: PeriodType): SaleCycle {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: PeriodType  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): PeriodType | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): SaleCycle {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
}