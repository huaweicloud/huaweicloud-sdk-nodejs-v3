

export class DomainProjectsInfo {
    private 'project_id': string | undefined;
    private 'project_name': string | undefined;
    public constructor(projectId?: any, projectName?: any) { 
        this['project_id'] = projectId;
        this['project_name'] = projectName;
    }
    public withProjectId(projectId: string): DomainProjectsInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProjectName(projectName: string): DomainProjectsInfo {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
}