

export class ListProjectPermissionsForAgencyRequest {
    private 'project_id'?: string;
    private 'agency_id'?: string;
    public constructor(projectId?: string, agencyId?: string) { 
        this['project_id'] = projectId;
        this['agency_id'] = agencyId;
    }
    public withProjectId(projectId: string): ListProjectPermissionsForAgencyRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAgencyId(agencyId: string): ListProjectPermissionsForAgencyRequest {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
}