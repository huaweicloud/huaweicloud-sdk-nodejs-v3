

export class ShowWorkFlowMetricRequest {
    private 'workflow_urn': string | undefined;
    public period?: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
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
    public withStartTime(startTime: string): ShowWorkFlowMetricRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowWorkFlowMetricRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}