

export class ListRecordContentsRequest {
    private 'publish_domain'?: string | undefined;
    public app?: string;
    public stream?: string;
    private 'record_type'?: ListRecordContentsRequestRecordTypeEnum | undefined;
    private 'start_time': string | undefined;
    private 'end_time'?: string | undefined;
    public offset?: number;
    public limit?: number;
    public constructor(startTime?: any) { 
        this['start_time'] = startTime;
    }
    public withPublishDomain(publishDomain: string): ListRecordContentsRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
        return this['publish_domain'];
    }
    public withApp(app: string): ListRecordContentsRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListRecordContentsRequest {
        this['stream'] = stream;
        return this;
    }
    public withRecordType(recordType: ListRecordContentsRequestRecordTypeEnum): ListRecordContentsRequest {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: ListRecordContentsRequestRecordTypeEnum | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType() {
        return this['record_type'];
    }
    public withStartTime(startTime: string): ListRecordContentsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListRecordContentsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withOffset(offset: number): ListRecordContentsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRecordContentsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRecordContentsRequestRecordTypeEnum {
    CONTINUOUS_RECORD = 'CONTINUOUS_RECORD',
    COMMAND_RECORD = 'COMMAND_RECORD',
    PLAN_RECORD = 'PLAN_RECORD',
    ON_DEMAND_RECORD = 'ON_DEMAND_RECORD'
}
