

export class ListRecordContentsRequest {
    private 'publish_domain'?: string;
    public app?: string;
    public stream?: string;
    private 'record_type'?: ListRecordContentsRequestRecordTypeEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(startTime?: string) { 
        this['start_time'] = startTime;
    }
    public withPublishDomain(publishDomain: string): ListRecordContentsRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
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
    public withRecordType(recordType: ListRecordContentsRequestRecordTypeEnum | string): ListRecordContentsRequest {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: ListRecordContentsRequestRecordTypeEnum | string  | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType(): ListRecordContentsRequestRecordTypeEnum | string | undefined {
        return this['record_type'];
    }
    public withStartTime(startTime: string): ListRecordContentsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListRecordContentsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
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
    COMMAND_RECORD = 'COMMAND_RECORD'
}
