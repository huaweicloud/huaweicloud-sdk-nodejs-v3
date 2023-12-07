

export class ShowAppsDashboardRequest {
    public workspace?: string;
    private 'Dlm-Type'?: ShowAppsDashboardRequestDlmTypeEnum | string;
    private 'Content-Type'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'time_unit'?: ShowAppsDashboardRequestTimeUnitEnum | string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, contentType?: string, startTime?: number, endTime?: number, timeUnit?: string) { 
        this['workspace'] = workspace;
        this['Content-Type'] = contentType;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['time_unit'] = timeUnit;
    }
    public withWorkspace(workspace: string): ShowAppsDashboardRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDlmType(dlmType: ShowAppsDashboardRequestDlmTypeEnum | string): ShowAppsDashboardRequest {
        this['Dlm-Type'] = dlmType;
        return this;
    }
    public set dlmType(dlmType: ShowAppsDashboardRequestDlmTypeEnum | string  | undefined) {
        this['Dlm-Type'] = dlmType;
    }
    public get dlmType(): ShowAppsDashboardRequestDlmTypeEnum | string | undefined {
        return this['Dlm-Type'];
    }
    public withContentType(contentType: string): ShowAppsDashboardRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withStartTime(startTime: number): ShowAppsDashboardRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowAppsDashboardRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withTimeUnit(timeUnit: ShowAppsDashboardRequestTimeUnitEnum | string): ShowAppsDashboardRequest {
        this['time_unit'] = timeUnit;
        return this;
    }
    public set timeUnit(timeUnit: ShowAppsDashboardRequestTimeUnitEnum | string  | undefined) {
        this['time_unit'] = timeUnit;
    }
    public get timeUnit(): ShowAppsDashboardRequestTimeUnitEnum | string | undefined {
        return this['time_unit'];
    }
    public withLimit(limit: number): ShowAppsDashboardRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowAppsDashboardRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAppsDashboardRequestDlmTypeEnum {
    SHARED = 'SHARED',
    EXCLUSIVE = 'EXCLUSIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowAppsDashboardRequestTimeUnitEnum {
    HOUR = 'HOUR',
    DAY = 'DAY'
}
