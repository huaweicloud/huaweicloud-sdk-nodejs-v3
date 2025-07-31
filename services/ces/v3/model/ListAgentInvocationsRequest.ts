

export class ListAgentInvocationsRequest {
    private 'instance_id'?: string;
    private 'instance_type'?: ListAgentInvocationsRequestInstanceTypeEnum | string;
    private 'invocation_id'?: string;
    private 'invocation_type'?: ListAgentInvocationsRequestInvocationTypeEnum | string;
    private 'invocation_target'?: ListAgentInvocationsRequestInvocationTargetEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ListAgentInvocationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: ListAgentInvocationsRequestInstanceTypeEnum | string): ListAgentInvocationsRequest {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: ListAgentInvocationsRequestInstanceTypeEnum | string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): ListAgentInvocationsRequestInstanceTypeEnum | string | undefined {
        return this['instance_type'];
    }
    public withInvocationId(invocationId: string): ListAgentInvocationsRequest {
        this['invocation_id'] = invocationId;
        return this;
    }
    public set invocationId(invocationId: string  | undefined) {
        this['invocation_id'] = invocationId;
    }
    public get invocationId(): string | undefined {
        return this['invocation_id'];
    }
    public withInvocationType(invocationType: ListAgentInvocationsRequestInvocationTypeEnum | string): ListAgentInvocationsRequest {
        this['invocation_type'] = invocationType;
        return this;
    }
    public set invocationType(invocationType: ListAgentInvocationsRequestInvocationTypeEnum | string  | undefined) {
        this['invocation_type'] = invocationType;
    }
    public get invocationType(): ListAgentInvocationsRequestInvocationTypeEnum | string | undefined {
        return this['invocation_type'];
    }
    public withInvocationTarget(invocationTarget: ListAgentInvocationsRequestInvocationTargetEnum | string): ListAgentInvocationsRequest {
        this['invocation_target'] = invocationTarget;
        return this;
    }
    public set invocationTarget(invocationTarget: ListAgentInvocationsRequestInvocationTargetEnum | string  | undefined) {
        this['invocation_target'] = invocationTarget;
    }
    public get invocationTarget(): ListAgentInvocationsRequestInvocationTargetEnum | string | undefined {
        return this['invocation_target'];
    }
    public withOffset(offset: number): ListAgentInvocationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAgentInvocationsRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAgentInvocationsRequestInstanceTypeEnum {
    ECS = 'ECS',
    BMS = 'BMS'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAgentInvocationsRequestInvocationTypeEnum {
    INSTALL = 'INSTALL',
    UPDATE = 'UPDATE',
    ROLLBACK = 'ROLLBACK',
    RETRY = 'RETRY',
    SET_REMOTE_INSTALLER = 'SET_REMOTE_INSTALLER',
    REMOTE_INSTALL = 'REMOTE_INSTALL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAgentInvocationsRequestInvocationTargetEnum {
    TELESCOPE = 'telescope'
}
