

export class ShowModifyHistoryRequest {
    private 'instance_id'?: string;
    private 'parameter_name'?: string;
    public offset?: string;
    public limit?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowModifyHistoryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withParameterName(parameterName: string): ShowModifyHistoryRequest {
        this['parameter_name'] = parameterName;
        return this;
    }
    public set parameterName(parameterName: string  | undefined) {
        this['parameter_name'] = parameterName;
    }
    public get parameterName(): string | undefined {
        return this['parameter_name'];
    }
    public withOffset(offset: string): ShowModifyHistoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ShowModifyHistoryRequest {
        this['limit'] = limit;
        return this;
    }
}