import { DefaultRecordConfig } from './DefaultRecordConfig';


export class RecordRuleRequest {
    private 'publish_domain'?: string;
    public app?: string;
    public stream?: string;
    private 'record_type'?: RecordRuleRequestRecordTypeEnum | string;
    private 'default_record_config'?: DefaultRecordConfig;
    public constructor(publishDomain?: string, app?: string, stream?: string, defaultRecordConfig?: DefaultRecordConfig) { 
        this['publish_domain'] = publishDomain;
        this['app'] = app;
        this['stream'] = stream;
        this['default_record_config'] = defaultRecordConfig;
    }
    public withPublishDomain(publishDomain: string): RecordRuleRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withApp(app: string): RecordRuleRequest {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): RecordRuleRequest {
        this['stream'] = stream;
        return this;
    }
    public withRecordType(recordType: RecordRuleRequestRecordTypeEnum | string): RecordRuleRequest {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: RecordRuleRequestRecordTypeEnum | string  | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType(): RecordRuleRequestRecordTypeEnum | string | undefined {
        return this['record_type'];
    }
    public withDefaultRecordConfig(defaultRecordConfig: DefaultRecordConfig): RecordRuleRequest {
        this['default_record_config'] = defaultRecordConfig;
        return this;
    }
    public set defaultRecordConfig(defaultRecordConfig: DefaultRecordConfig  | undefined) {
        this['default_record_config'] = defaultRecordConfig;
    }
    public get defaultRecordConfig(): DefaultRecordConfig | undefined {
        return this['default_record_config'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecordRuleRequestRecordTypeEnum {
    CONTINUOUS_RECORD = 'CONTINUOUS_RECORD',
    COMMAND_RECORD = 'COMMAND_RECORD',
    PLAN_RECORD = 'PLAN_RECORD',
    ON_DEMAND_RECORD = 'ON_DEMAND_RECORD'
}
