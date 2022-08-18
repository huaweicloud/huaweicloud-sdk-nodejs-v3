

export class ListWorkflowRequest {
    private 'workflow_name'?: string | undefined;
    public limit?: number;
    public offset?: number;
    private 'enterprise_project'?: string | undefined;
    public mode?: string;
    public constructor() { 
    }
    public withWorkflowName(workflowName: string): ListWorkflowRequest {
        this['workflow_name'] = workflowName;
        return this;
    }
    public set workflowName(workflowName: string | undefined) {
        this['workflow_name'] = workflowName;
    }
    public get workflowName() {
        return this['workflow_name'];
    }
    public withLimit(limit: number): ListWorkflowRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListWorkflowRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProject(enterpriseProject: string): ListWorkflowRequest {
        this['enterprise_project'] = enterpriseProject;
        return this;
    }
    public set enterpriseProject(enterpriseProject: string | undefined) {
        this['enterprise_project'] = enterpriseProject;
    }
    public get enterpriseProject() {
        return this['enterprise_project'];
    }
    public withMode(mode: string): ListWorkflowRequest {
        this['mode'] = mode;
        return this;
    }
}