

export class ListAlarmsRequest {
    public start?: string;
    public limit?: number;
    public order?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withStart(start: string): ListAlarmsRequest {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: number): ListAlarmsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOrder(order: string): ListAlarmsRequest {
        this['order'] = order;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAlarmsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}