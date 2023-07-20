

export class ListRecordRulesRequest {
    private 'publish_domain'?: string;
    public app?: string;
    public stream?: string;
    private 'record_type'?: ListRecordRulesRequestRecordTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withPublishDomain(publishDomain: string): ListRecordRulesRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withApp(app: string): ListRecordRulesRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListRecordRulesRequest {
        this['stream'] = stream;
        return this;
    }
    public withRecordType(recordType: ListRecordRulesRequestRecordTypeEnum | string): ListRecordRulesRequest {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: ListRecordRulesRequestRecordTypeEnum | string  | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType(): ListRecordRulesRequestRecordTypeEnum | string | undefined {
        return this['record_type'];
    }
    public withOffset(offset: number): ListRecordRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRecordRulesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRecordRulesRequestRecordTypeEnum {
    CONTINUOUS_RECORD = 'CONTINUOUS_RECORD',
    COMMAND_RECORD = 'COMMAND_RECORD',
    PLAN_RECORD = 'PLAN_RECORD',
    ON_DEMAND_RECORD = 'ON_DEMAND_RECORD'
}
