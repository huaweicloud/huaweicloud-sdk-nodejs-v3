import { DefaultRecordConfig } from './DefaultRecordConfig';


export class RecordRule {
    public id?: string;
    private 'publish_domain': string | undefined;
    public app: string;
    public stream: string;
    private 'record_type'?: RecordRuleRecordTypeEnum | undefined;
    private 'default_record_config'?: DefaultRecordConfig | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public constructor(publishDomain?: any, app?: any, stream?: any) { 
        this['publish_domain'] = publishDomain;
        this['app'] = app;
        this['stream'] = stream;
    }
    public withId(id: string): RecordRule {
        this['id'] = id;
        return this;
    }
    public withPublishDomain(publishDomain: string): RecordRule {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
        return this['publish_domain'];
    }
    public withApp(app: string): RecordRule {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): RecordRule {
        this['stream'] = stream;
        return this;
    }
    public withRecordType(recordType: RecordRuleRecordTypeEnum): RecordRule {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: RecordRuleRecordTypeEnum | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType() {
        return this['record_type'];
    }
    public withDefaultRecordConfig(defaultRecordConfig: DefaultRecordConfig): RecordRule {
        this['default_record_config'] = defaultRecordConfig;
        return this;
    }
    public set defaultRecordConfig(defaultRecordConfig: DefaultRecordConfig | undefined) {
        this['default_record_config'] = defaultRecordConfig;
    }
    public get defaultRecordConfig() {
        return this['default_record_config'];
    }
    public withCreateTime(createTime: string): RecordRule {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): RecordRule {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecordRuleRecordTypeEnum {
    CONTINUOUS_RECORD = 'CONTINUOUS_RECORD',
    COMMAND_RECORD = 'COMMAND_RECORD',
    PLAN_RECORD = 'PLAN_RECORD',
    ON_DEMAND_RECORD = 'ON_DEMAND_RECORD'
}
