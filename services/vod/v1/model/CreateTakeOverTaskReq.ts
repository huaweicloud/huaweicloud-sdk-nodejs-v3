

export class CreateTakeOverTaskReq {
    public bucket: string;
    private 'object': string | undefined;
    public suffix?: Array<string>;
    private 'template_group_name'?: string | undefined;
    private 'workflow_name'?: string | undefined;
    private 'host_type'?: number | undefined;
    private 'output_bucket'?: string | undefined;
    private 'output_path'?: string | undefined;
    public constructor(bucket?: any, modelObject?: any) { 
        this['bucket'] = bucket;
        this['object'] = modelObject;
    }
    public withBucket(bucket: string): CreateTakeOverTaskReq {
        this['bucket'] = bucket;
        return this;
    }
    public withModelObject(modelObject: string): CreateTakeOverTaskReq {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject() {
        return this['object'];
    }
    public withSuffix(suffix: Array<string>): CreateTakeOverTaskReq {
        this['suffix'] = suffix;
        return this;
    }
    public withTemplateGroupName(templateGroupName: string): CreateTakeOverTaskReq {
        this['template_group_name'] = templateGroupName;
        return this;
    }
    public set templateGroupName(templateGroupName: string | undefined) {
        this['template_group_name'] = templateGroupName;
    }
    public get templateGroupName() {
        return this['template_group_name'];
    }
    public withWorkflowName(workflowName: string): CreateTakeOverTaskReq {
        this['workflow_name'] = workflowName;
        return this;
    }
    public set workflowName(workflowName: string | undefined) {
        this['workflow_name'] = workflowName;
    }
    public get workflowName() {
        return this['workflow_name'];
    }
    public withHostType(hostType: number): CreateTakeOverTaskReq {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: number | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType() {
        return this['host_type'];
    }
    public withOutputBucket(outputBucket: string): CreateTakeOverTaskReq {
        this['output_bucket'] = outputBucket;
        return this;
    }
    public set outputBucket(outputBucket: string | undefined) {
        this['output_bucket'] = outputBucket;
    }
    public get outputBucket() {
        return this['output_bucket'];
    }
    public withOutputPath(outputPath: string): CreateTakeOverTaskReq {
        this['output_path'] = outputPath;
        return this;
    }
    public set outputPath(outputPath: string | undefined) {
        this['output_path'] = outputPath;
    }
    public get outputPath() {
        return this['output_path'];
    }
}