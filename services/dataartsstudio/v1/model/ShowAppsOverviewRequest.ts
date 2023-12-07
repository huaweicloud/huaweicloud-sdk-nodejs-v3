

export class ShowAppsOverviewRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ShowAppsOverviewRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'time_unit'?: ShowAppsOverviewRequestTimeUnitEnum | string;
    public constructor(workspace?: string, contentType?: string, startTime?: number, endTime?: number, timeUnit?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['time_unit'] = timeUnit;
    }
    public withWorkspace(workspace: string): ShowAppsOverviewRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ShowAppsOverviewRequestDlmTypeEnum | string): ShowAppsOverviewRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ShowAppsOverviewRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ShowAppsOverviewRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ShowAppsOverviewRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withStartTime(startTime: number): ShowAppsOverviewRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowAppsOverviewRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTimeUnit(timeUnit: ShowAppsOverviewRequestTimeUnitEnum | string): ShowAppsOverviewRequest {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: ShowAppsOverviewRequestTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): ShowAppsOverviewRequestTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAppsOverviewRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAppsOverviewRequestTimeUnitEnum {
    HOUR = 'HOUR',
    DAY = 'DAY'
}
