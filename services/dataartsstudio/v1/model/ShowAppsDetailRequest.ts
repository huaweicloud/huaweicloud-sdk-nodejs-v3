

export class ShowAppsDetailRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ShowAppsDetailRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'app_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'time_unit'?: ShowAppsDetailRequestTimeUnitEnum | string;
    public constructor(workspace?: string, contentType?: string, appId?: string, startTime?: number, endTime?: number, timeUnit?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['app_id'] = appId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['time_unit'] = timeUnit;
    }
    public withWorkspace(workspace: string): ShowAppsDetailRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ShowAppsDetailRequestDlmTypeEnum | string): ShowAppsDetailRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ShowAppsDetailRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ShowAppsDetailRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ShowAppsDetailRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAppId(appId: string): ShowAppsDetailRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withStartTime(startTime: number): ShowAppsDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowAppsDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTimeUnit(timeUnit: ShowAppsDetailRequestTimeUnitEnum | string): ShowAppsDetailRequest {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: ShowAppsDetailRequestTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): ShowAppsDetailRequestTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAppsDetailRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAppsDetailRequestTimeUnitEnum {
    HOUR = 'HOUR',
    DAY = 'DAY'
}
