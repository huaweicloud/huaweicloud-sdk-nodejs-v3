

export class ListEastWestFirewallRequest {
    private 'project_id': string | undefined;
    public limit: number;
    public offset: number;
    public constructor(projectId?: any, limit?: any, offset?: any) { 
        this['project_id'] = projectId;
        this['limit'] = limit;
        this['offset'] = offset;
    }
    public withProjectId(projectId: string): ListEastWestFirewallRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withLimit(limit: number): ListEastWestFirewallRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListEastWestFirewallRequest {
        this['offset'] = offset;
        return this;
    }
}