

export class ListAppsTopRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ListAppsTopRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'time_unit'?: ListAppsTopRequestTimeUnitEnum | string;
    private 'top_num'?: number;
    private 'order_by'?: ListAppsTopRequestOrderByEnum | string;
    public constructor(workspace?: string, contentType?: string, startTime?: number, endTime?: number, timeUnit?: string, topNum?: number, orderBy?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['time_unit'] = timeUnit;
        this['top_num'] = topNum;
        this['order_by'] = orderBy;
    }
    public withWorkspace(workspace: string): ListAppsTopRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ListAppsTopRequestDlmTypeEnum | string): ListAppsTopRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ListAppsTopRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ListAppsTopRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ListAppsTopRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withStartTime(startTime: number): ListAppsTopRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListAppsTopRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTimeUnit(timeUnit: ListAppsTopRequestTimeUnitEnum | string): ListAppsTopRequest {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: ListAppsTopRequestTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): ListAppsTopRequestTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
    public withTopNum(topNum: number): ListAppsTopRequest {
        this['top_num'] = topNum;
        return this;
    }
    public set topNum(topNum: number  | undefined) {
        this['top_num'] = topNum;
    }
    public get topNum(): number | undefined {
        return this['top_num'];
    }
    public withOrderBy(orderBy: ListAppsTopRequestOrderByEnum | string): ListAppsTopRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: ListAppsTopRequestOrderByEnum | string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): ListAppsTopRequestOrderByEnum | string | undefined {
        return this['order_by'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAppsTopRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAppsTopRequestTimeUnitEnum {
    HOUR = 'HOUR',
    DAY = 'DAY'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAppsTopRequestOrderByEnum {
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
