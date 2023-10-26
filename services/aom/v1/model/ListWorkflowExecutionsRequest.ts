

export class ListWorkflowExecutionsRequest {
    private 'workflow_id'?: string;
    private 'x_enterprise_project_id'?: string;
    public constructor(workflowId?: string) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): ListWorkflowExecutionsRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withXEnterpriseProjectId(xEnterpriseProjectId: string): ListWorkflowExecutionsRequest {
        this['x_enterprise_project_id'] = xEnterpriseProjectId;
        return this;
    }
    public set xEnterpriseProjectId(xEnterpriseProjectId: string  | undefined) {
        this['x_enterprise_project_id'] = xEnterpriseProjectId;
    }
    public get xEnterpriseProjectId(): string | undefined {
        return this['x_enterprise_project_id'];
    }
}