

export class OperateErrorInfo {
    private 'workflow_urn'?: string;
    private 'error_detail'?: string;
    public constructor() { 
    }
    public withWorkflowUrn(workflowUrn: string): OperateErrorInfo {
        this['workflow_urn'] = workflowUrn;
        return this;
    }
    public set workflowUrn(workflowUrn: string  | undefined) {
        this['workflow_urn'] = workflowUrn;
    }
    public get workflowUrn(): string | undefined {
        return this['workflow_urn'];
    }
    public withErrorDetail(errorDetail: string): OperateErrorInfo {
        this['error_detail'] = errorDetail;
        return this;
    }
    public set errorDetail(errorDetail: string  | undefined) {
        this['error_detail'] = errorDetail;
    }
    public get errorDetail(): string | undefined {
        return this['error_detail'];
    }
}