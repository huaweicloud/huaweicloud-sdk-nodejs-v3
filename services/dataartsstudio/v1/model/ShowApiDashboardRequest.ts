

export class ShowApiDashboardRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ShowApiDashboardRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'api_id'?: string;
    private 'instance_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'time_unit'?: ShowApiDashboardRequestTimeUnitEnum | string;
    public constructor(workspace?: string, contentType?: string, apiId?: string, startTime?: number, endTime?: number, timeUnit?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['api_id'] = apiId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['time_unit'] = timeUnit;
    }
    public withWorkspace(workspace: string): ShowApiDashboardRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ShowApiDashboardRequestDlmTypeEnum | string): ShowApiDashboardRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ShowApiDashboardRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ShowApiDashboardRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ShowApiDashboardRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withApiId(apiId: string): ShowApiDashboardRequest {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withInstanceId(instanceId: string): ShowApiDashboardRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartTime(startTime: number): ShowApiDashboardRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowApiDashboardRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTimeUnit(timeUnit: ShowApiDashboardRequestTimeUnitEnum | string): ShowApiDashboardRequest {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: ShowApiDashboardRequestTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): ShowApiDashboardRequestTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowApiDashboardRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowApiDashboardRequestTimeUnitEnum {
    HOUR = 'HOUR',
    DAY = 'DAY'
}
