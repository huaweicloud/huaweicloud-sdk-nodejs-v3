

export class WorkflowSimpleInfo {
    private 'enable_stream_response': boolean | undefined;
    public id: string;
    private 'workflow_urn': string | undefined;
    public name: string;
    public description: string;
    private 'created_time': string | undefined;
    private 'updated_time': string | undefined;
    private 'created_by': string | undefined;
    public constructor(enableStreamResponse?: any, id?: any, workflowUrn?: any, name?: any, description?: any, createdTime?: any, updatedTime?: any, createdBy?: any) { 
        this['enable_stream_response'] = enableStreamResponse;
        this['id'] = id;
        this['workflow_urn'] = workflowUrn;
        this['name'] = name;
        this['description'] = description;
        this['created_time'] = createdTime;
        this['updated_time'] = updatedTime;
        this['created_by'] = createdBy;
    }
    public withEnableStreamResponse(enableStreamResponse: boolean): WorkflowSimpleInfo {
        this['enable_stream_response'] = enableStreamResponse;
        return this;
    }
    public set enableStreamResponse(enableStreamResponse: boolean | undefined) {
        this['enable_stream_response'] = enableStreamResponse;
    }
    public get enableStreamResponse() {
        return this['enable_stream_response'];
    }
    public withId(id: string): WorkflowSimpleInfo {
        this['id'] = id;
        return this;
    }
    public withWorkflowUrn(workflowUrn: string): WorkflowSimpleInfo {
        this['workflow_urn'] = workflowUrn;
        return this;
    }
    public set workflowUrn(workflowUrn: string | undefined) {
        this['workflow_urn'] = workflowUrn;
    }
    public get workflowUrn() {
        return this['workflow_urn'];
    }
    public withName(name: string): WorkflowSimpleInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): WorkflowSimpleInfo {
        this['description'] = description;
        return this;
    }
    public withCreatedTime(createdTime: string): WorkflowSimpleInfo {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): WorkflowSimpleInfo {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime() {
        return this['updated_time'];
    }
    public withCreatedBy(createdBy: string): WorkflowSimpleInfo {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy() {
        return this['created_by'];
    }
}