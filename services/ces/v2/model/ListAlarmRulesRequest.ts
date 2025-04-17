

export class ListAlarmRulesRequest {
    private 'alarm_id'?: string;
    public name?: string;
    public namespace?: string;
    private 'resource_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'product_name'?: string;
    private 'resource_level'?: ListAlarmRulesRequestResourceLevelEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withAlarmId(alarmId: string): ListAlarmRulesRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withName(name: string): ListAlarmRulesRequest {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): ListAlarmRulesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withResourceId(resourceId: string): ListAlarmRulesRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAlarmRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProductName(productName: string): ListAlarmRulesRequest {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withResourceLevel(resourceLevel: ListAlarmRulesRequestResourceLevelEnum | string): ListAlarmRulesRequest {
        this['resource_level'] = resourceLevel;
        return this;
    }
    public set resourceLevel(resourceLevel: ListAlarmRulesRequestResourceLevelEnum | string  | undefined) {
        this['resource_level'] = resourceLevel;
    }
    public get resourceLevel(): ListAlarmRulesRequestResourceLevelEnum | string | undefined {
        return this['resource_level'];
    }
    public withOffset(offset: number): ListAlarmRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlarmRulesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAlarmRulesRequestResourceLevelEnum {
    PRODUCT = 'product',
    DIMENSION = 'dimension'
}
