

export class OperateErrorInfo {
    private 'workflow_urn'?: string | undefined;
    private 'error_detail'?: string | undefined;
    public constructor() { 
    }
    public withWorkflowUrn(workflowUrn: string): OperateErrorInfo {
        this['workflow_urn'] = workflowUrn;
        return this;
    }
    public set workflowUrn(workflowUrn: string | undefined) {
        this['workflow_urn'] = workflowUrn;
    }
    public get workflowUrn() {
        return this['workflow_urn'];
    }
    public withErrorDetail(errorDetail: string): OperateErrorInfo {
        this['error_detail'] = errorDetail;
        return this;
    }
    public set errorDetail(errorDetail: string | undefined) {
        this['error_detail'] = errorDetail;
    }
    public get errorDetail() {
        return this['error_detail'];
    }
}