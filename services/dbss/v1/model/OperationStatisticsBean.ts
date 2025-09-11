

export class OperationStatisticsBean {
    public period?: string;
    private 'risk_operation_num'?: number;
    public constructor() { 
    }
    public withPeriod(period: string): OperationStatisticsBean {
        this['period'] = period;
        return this;
    }
    public withRiskOperationNum(riskOperationNum: number): OperationStatisticsBean {
        this['risk_operation_num'] = riskOperationNum;
        return this;
    }
    public set riskOperationNum(riskOperationNum: number  | undefined) {
        this['risk_operation_num'] = riskOperationNum;
    }
    public get riskOperationNum(): number | undefined {
        return this['risk_operation_num'];
    }
}