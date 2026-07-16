

export class UpdateWorkspaceQuotasReqQuotas {
    public resource?: string;
    public quota?: number;
    public constructor(resource?: string, quota?: number) { 
        this['resource'] = resource;
        this['quota'] = quota;
    }
    public withResource(resource: string): UpdateWorkspaceQuotasReqQuotas {
        this['resource'] = resource;
        return this;
    }
    public withQuota(quota: number): UpdateWorkspaceQuotasReqQuotas {
        this['quota'] = quota;
        return this;
    }
}