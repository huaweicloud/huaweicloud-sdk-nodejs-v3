import { NodeSqlAutoSqlLimiting } from './NodeSqlAutoSqlLimiting';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlAutoSqlLimitingResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'auto_sql_limiting_rules'?: Array<NodeSqlAutoSqlLimiting>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowSqlAutoSqlLimitingResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAutoSqlLimitingRules(autoSqlLimitingRules: Array<NodeSqlAutoSqlLimiting>): ShowSqlAutoSqlLimitingResponse {
        this['auto_sql_limiting_rules'] = autoSqlLimitingRules;
        return this;
    }
    public set autoSqlLimitingRules(autoSqlLimitingRules: Array<NodeSqlAutoSqlLimiting>  | undefined) {
        this['auto_sql_limiting_rules'] = autoSqlLimitingRules;
    }
    public get autoSqlLimitingRules(): Array<NodeSqlAutoSqlLimiting> | undefined {
        return this['auto_sql_limiting_rules'];
    }
}