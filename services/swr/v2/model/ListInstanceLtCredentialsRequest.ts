

export class ListInstanceLtCredentialsRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'self_only'?: boolean;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceLtCredentialsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListInstanceLtCredentialsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceLtCredentialsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSelfOnly(selfOnly: boolean): ListInstanceLtCredentialsRequest {
        this['self_only'] = selfOnly;
        return this;
    }
    public set selfOnly(selfOnly: boolean  | undefined) {
        this['self_only'] = selfOnly;
    }
    public get selfOnly(): boolean | undefined {
        return this['self_only'];
    }
}