import { DefaultRecordConfig } from './DefaultRecordConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRecordRuleResponse extends SdkResponse {
    public id?: string;
    private 'publish_domain'?: string;
    public app?: string;
    public stream?: string;
    private 'record_type'?: UpdateRecordRuleResponseRecordTypeEnum | string;
    private 'default_record_config'?: DefaultRecordConfig;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateRecordRuleResponse {
        this['id'] = id;
        return this;
    }
    public withPublishDomain(publishDomain: string): UpdateRecordRuleResponse {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withApp(app: string): UpdateRecordRuleResponse {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): UpdateRecordRuleResponse {
        this['stream'] = stream;
        return this;
    }
    public withRecordType(recordType: UpdateRecordRuleResponseRecordTypeEnum | string): UpdateRecordRuleResponse {
        this['record_type'] = recordType;
        return this;
    }
    public set recordType(recordType: UpdateRecordRuleResponseRecordTypeEnum | string  | undefined) {
        this['record_type'] = recordType;
    }
    public get recordType(): UpdateRecordRuleResponseRecordTypeEnum | string | undefined {
        return this['record_type'];
    }
    public withDefaultRecordConfig(defaultRecordConfig: DefaultRecordConfig): UpdateRecordRuleResponse {
        this['default_record_config'] = defaultRecordConfig;
        return this;
    }
    public set defaultRecordConfig(defaultRecordConfig: DefaultRecordConfig  | undefined) {
        this['default_record_config'] = defaultRecordConfig;
    }
    public get defaultRecordConfig(): DefaultRecordConfig | undefined {
        return this['default_record_config'];
    }
    public withCreateTime(createTime: string): UpdateRecordRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateRecordRuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateRecordRuleResponseRecordTypeEnum {
    CONTINUOUS_RECORD = 'CONTINUOUS_RECORD',
    COMMAND_RECORD = 'COMMAND_RECORD',
    PLAN_RECORD = 'PLAN_RECORD',
    ON_DEMAND_RECORD = 'ON_DEMAND_RECORD'
}
