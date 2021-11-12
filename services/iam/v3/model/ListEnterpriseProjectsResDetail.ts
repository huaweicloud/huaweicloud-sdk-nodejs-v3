

export class ListEnterpriseProjectsResDetail {
    public projectId: string;
    public constructor(projectId?: any) { 
        this['projectId'] = projectId;
    }
    public withProjectId(projectId: string): ListEnterpriseProjectsResDetail {
        this['projectId'] = projectId;
        return this;
    }
}