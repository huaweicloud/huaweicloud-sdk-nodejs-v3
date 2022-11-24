

export class ListDnsServersRequest {
    private 'project_id': string | undefined;
    public limit?: number;
    public offset?: number;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListDnsServersRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withLimit(limit: number): ListDnsServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDnsServersRequest {
        this['offset'] = offset;
        return this;
    }
}