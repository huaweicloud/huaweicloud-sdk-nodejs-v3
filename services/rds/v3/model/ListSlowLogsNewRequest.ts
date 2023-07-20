

export class ListSlowLogsNewRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'start_date'?: string;
    private 'end_date'?: string;
    public offset?: number;
    public limit?: number;
    public type?: ListSlowLogsNewRequestTypeEnum | string;
    public constructor(instanceId?: string, startDate?: string, endDate?: string) { 
        this['instance_id'] = instanceId;
        this['start_date'] = startDate;
        this['end_date'] = endDate;
    }
    public withXLanguage(xLanguage: string): ListSlowLogsNewRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSlowLogsNewRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartDate(startDate: string): ListSlowLogsNewRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ListSlowLogsNewRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withOffset(offset: number): ListSlowLogsNewRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSlowLogsNewRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: ListSlowLogsNewRequestTypeEnum | string): ListSlowLogsNewRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSlowLogsNewRequestTypeEnum {
    INSERT = 'INSERT',
    UPDATE = 'UPDATE',
    SELECT = 'SELECT',
    DELETE = 'DELETE',
    CREATE = 'CREATE'
}
