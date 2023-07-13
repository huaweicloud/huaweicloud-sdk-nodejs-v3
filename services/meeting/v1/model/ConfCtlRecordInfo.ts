

export class ConfCtlRecordInfo {
    public operateTime?: number;
    public operateSource?: string;
    public operator?: string;
    public operateCode?: string;
    public operationObject?: string;
    public operateResult?: string;
    public detail?: string;
    public constructor() { 
    }
    public withOperateTime(operateTime: number): ConfCtlRecordInfo {
        this['operateTime'] = operateTime;
        return this;
    }
    public withOperateSource(operateSource: string): ConfCtlRecordInfo {
        this['operateSource'] = operateSource;
        return this;
    }
    public withOperator(operator: string): ConfCtlRecordInfo {
        this['operator'] = operator;
        return this;
    }
    public withOperateCode(operateCode: string): ConfCtlRecordInfo {
        this['operateCode'] = operateCode;
        return this;
    }
    public withOperationObject(operationObject: string): ConfCtlRecordInfo {
        this['operationObject'] = operationObject;
        return this;
    }
    public withOperateResult(operateResult: string): ConfCtlRecordInfo {
        this['operateResult'] = operateResult;
        return this;
    }
    public withDetail(detail: string): ConfCtlRecordInfo {
        this['detail'] = detail;
        return this;
    }
}