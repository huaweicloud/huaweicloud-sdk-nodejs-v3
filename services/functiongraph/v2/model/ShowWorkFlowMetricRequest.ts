

export class ShowWorkFlowMetricRequest {
    private 'workflow_urn': string | undefined;
    public period?: string;
    public constructor(workflowUrn?: any) { 
        this['workflow_urn'] = workflowUrn;
    }
    public withWorkflowUrn(workflowUrn: string): ShowWorkFlowMetricRequest {
        this['workflow_urn'] = workflowUrn;
        return this;
    }
    public set workflowUrn(workflowUrn: string | undefined) {
        this['workflow_urn'] = workflowUrn;
    }
    public get workflowUrn() {
        return this['workflow_urn'];
    }
    public withPeriod(period: string): ShowWorkFlowMetricRequest {
        this['period'] = period;
        return this;
    }
}