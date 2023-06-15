

export class ListRecordRulesRequest {
    private 'publish_domain'?: string | undefined;
    public app?: string;
    public stream?: string;
    private 'record_type'?: ListRecordRulesRequestRecordTypeEnum | undefined;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withPublishDomain(publishDomain: string): ListRecordRulesRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
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
    public withRecordType(recordType: ListRecordRulesRequestRecordTypeEnum): ListRecordRulesRequest {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: ListRecordRulesRequestRecordTypeEnum | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType() {
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
