

export class DeleteReservedInstanceByIdRequest {
    private 'function_urn': string | undefined;
    private 'instance_id': string | undefined;
    public constructor(functionUrn?: any, instanceId?: any) { 
        this['function_urn'] = functionUrn;
        this['instance_id'] = instanceId;
    }
    public withFunctionUrn(functionUrn: string): DeleteReservedInstanceByIdRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withInstanceId(instanceId: string): DeleteReservedInstanceByIdRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
}