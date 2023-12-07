

export class ListApiTopNRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListApiTopNRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'api_id'?: string;
    private 'instance_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'time_unit'?: ListApiTopNRequestTimeUnitEnum | string;
    private 'top_num'?: number;
    private 'order_by'?: ListApiTopNRequestOrderByEnum | string;
    public constructor(workspace?: string, contentType?: string, apiId?: string, startTime?: number, endTime?: number, timeUnit?: string, topNum?: number, orderBy?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['api_id'] = apiId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['time_unit'] = timeUnit;
        this['top_num'] = topNum;
        this['order_by'] = orderBy;
    }
    public withWorkspace(workspace: string): ListApiTopNRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListApiTopNRequestDlmTypeEnum | string): ListApiTopNRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListApiTopNRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListApiTopNRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListApiTopNRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withApiId(apiId: string): ListApiTopNRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withInstanceId(instanceId: string): ListApiTopNRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartTime(startTime: number): ListApiTopNRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListApiTopNRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTimeUnit(timeUnit: ListApiTopNRequestTimeUnitEnum | string): ListApiTopNRequest {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: ListApiTopNRequestTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): ListApiTopNRequestTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
    public withTopNum(topNum: number): ListApiTopNRequest {
        this['top_num'] = topNum;
        return this;
    }
    public set topNum(topNum: number  | undefined) {
        this['top_num'] = topNum;
    }
    public get topNum(): number | undefined {
        return this['top_num'];
    }
    public withOrderBy(orderBy: ListApiTopNRequestOrderByEnum | string): ListApiTopNRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListApiTopNRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListApiTopNRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListApiTopNRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApiTopNRequestTimeUnitEnum {
    HOUR = 'HOUR',
    DAY = 'DAY'
}
/**
    * @export
    * @enum {string}
    */
export enum ListApiTopNRequestOrderByEnum {
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
