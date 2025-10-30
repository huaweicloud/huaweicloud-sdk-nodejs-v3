import { PayMode } from './PayMode';
import { PeriodType } from './PeriodType';


export class SaleCycleOption {
    private 'pay_mode'?: PayMode;
    private 'period_type'?: PeriodType;
    private 'period_num'?: Array<number>;
    public constructor() { 
    }
    public withPayMode(payMode: PayMode): SaleCycleOption {
        this['pay_mode'] = payMode;
        return this;
    }
    public set payMode(payMode: PayMode  | undefined) {
        this['pay_mode'] = payMode;
    }
    public get payMode(): PayMode | undefined {
        return this['pay_mode'];
    }
    public withPeriodType(periodType: PeriodType): SaleCycleOption {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: PeriodType  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): PeriodType | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: Array<number>): SaleCycleOption {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: Array<number>  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): Array<number> | undefined {
        return this['period_num'];
    }
}