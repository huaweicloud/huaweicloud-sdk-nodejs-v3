

export class RemediationExecution {
    public automatic?: boolean;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_provider'?: string;
    private 'resource_type'?: string;
    private 'invocation_time'?: string;
    public state?: RemediationExecutionStateEnum | string;
    public message?: string;
    public constructor() { 
    }
    public withAutomatic(automatic: boolean): RemediationExecution {
        this['automatic'] = automatic;
        return this;
    }
    public withResourceId(resourceId: string): RemediationExecution {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): RemediationExecution {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceProvider(resourceProvider: string): RemediationExecution {
        this['resource_provider'] = resourceProvider;
        return this;
    }
    public set resourceProvider(resourceProvider: string  | undefined) {
        this['resource_provider'] = resourceProvider;
    }
    public get resourceProvider(): string | undefined {
        return this['resource_provider'];
    }
    public withResourceType(resourceType: string): RemediationExecution {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withInvocationTime(invocationTime: string): RemediationExecution {
        this['invocation_time'] = invocationTime;
        return this;
    }
    public set invocationTime(invocationTime: string  | undefined) {
        this['invocation_time'] = invocationTime;
    }
    public get invocationTime(): string | undefined {
        return this['invocation_time'];
    }
    public withState(state: RemediationExecutionStateEnum | string): RemediationExecution {
        this['state'] = state;
        return this;
    }
    public withMessage(message: string): RemediationExecution {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RemediationExecutionStateEnum {
    IN_QUEUE = 'IN_QUEUE',
    IN_PROGRESS = 'IN_PROGRESS',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED'
}
