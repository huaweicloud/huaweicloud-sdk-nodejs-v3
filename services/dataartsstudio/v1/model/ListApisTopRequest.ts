

export class ListApisTopRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListApisTopRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'instance_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'time_unit'?: ListApisTopRequestTimeUnitEnum | string;
    private 'top_num'?: number;
    private 'order_by'?: ListApisTopRequestOrderByEnum | string;
    public constructor(workspace?: string, dlmType?: string, contentType?: string, startTime?: number, endTime?: number, timeUnit?: string, topNum?: number, orderBy?: string) { 
        this['workspace'] = workspace;
        this['Dlm-Type'] = dlmType;
        this['Content-Type'] = contentType;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['time_unit'] = timeUnit;
        this['top_num'] = topNum;
        this['order_by'] = orderBy;
    }
    public withWorkspace(workspace: string): ListApisTopRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListApisTopRequestDlmTypeEnum | string): ListApisTopRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListApisTopRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListApisTopRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListApisTopRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withInstanceId(instanceId: string): ListApisTopRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartTime(startTime: number): ListApisTopRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListApisTopRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTimeUnit(timeUnit: ListApisTopRequestTimeUnitEnum | string): ListApisTopRequest {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: ListApisTopRequestTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): ListApisTopRequestTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
    public withTopNum(topNum: number): ListApisTopRequest {
        this['top_num'] = topNum;
        return this;
    }
    public set topNum(topNum: number  | undefined) {
        this['top_num'] = topNum;
    }
    public get topNum(): number | undefined {
        return this['top_num'];
    }
    public withOrderBy(orderBy: ListApisTopRequestOrderByEnum | string): ListApisTopRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListApisTopRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListApisTopRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApisTopRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApisTopRequestTimeUnitEnum {
    HOUR = 'HOUR',
    DAY = 'DAY'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApisTopRequestOrderByEnum {
    CALL_NUM = 'CALL_NUM',
    SUCCESS_NUM = 'SUCCESS_NUM',
    FAIL_NUM = 'FAIL_NUM',
    LEGAL_NUM = 'LEGAL_NUM',
    ILLEGAL_NUM = 'ILLEGAL_NUM',
    COST_TIME_AVG = 'COST_TIME_AVG',
    SUCCESS_COST_TIME_AVG = 'SUCCESS_COST_TIME_AVG',
    FAIL_COST_TIME_AVG = 'FAIL_COST_TIME_AVG',
    SUCCESS_RATE = 'SUCCESS_RATE',
    FAIL_RATE = 'FAIL_RATE',
    LEGAL_RATE = 'LEGAL_RATE',
    ILLEGAL_RATE = 'ILLEGAL_RATE'
}
