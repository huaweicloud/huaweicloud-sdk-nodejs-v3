

export class ListAlarmRulesRequest {
    private 'alarm_id'?: string;
    public name?: string;
    public namespace?: string;
    private 'resource_id'?: string;
    private 'enterprise_project_id'?: string;
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
    public withOffset(offset: number): ListAlarmRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlarmRulesRequest {
        this['limit'] = limit;
        return this;
    }
}