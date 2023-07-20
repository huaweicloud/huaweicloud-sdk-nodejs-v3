

export class ListErrorLogsRequest {
    private 'instance_id'?: string;
    private 'start_date'?: string;
    private 'end_date'?: string;
    private 'node_id'?: string;
    public type?: ListErrorLogsRequestTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, startDate?: string, endDate?: string) { 
        this['instance_id'] = instanceId;
        this['start_date'] = startDate;
        this['end_date'] = endDate;
    }
    public withInstanceId(instanceId: string): ListErrorLogsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartDate(startDate: string): ListErrorLogsRequest {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ListErrorLogsRequest {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withNodeId(nodeId: string): ListErrorLogsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withType(type: ListErrorLogsRequestTypeEnum | string): ListErrorLogsRequest {
        this['type'] = type;
        return this;
    }
    public withOffset(offset: number): ListErrorLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListErrorLogsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListErrorLogsRequestTypeEnum {
    WARNING = 'WARNING',
    ERROR = 'ERROR'
}
