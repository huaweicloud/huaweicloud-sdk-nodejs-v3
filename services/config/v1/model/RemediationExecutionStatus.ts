import { RemediationResourceKey } from './RemediationResourceKey';


export class RemediationExecutionStatus {
    private 'resource_key'?: RemediationResourceKey;
    private 'invocation_time'?: string;
    public state?: RemediationExecutionStatusStateEnum | string;
    public message?: string;
    public constructor() { 
    }
    public withResourceKey(resourceKey: RemediationResourceKey): RemediationExecutionStatus {
        this['resource_key'] = resourceKey;
        return this;
    }
    public set resourceKey(resourceKey: RemediationResourceKey  | undefined) {
        this['resource_key'] = resourceKey;
    }
    public get resourceKey(): RemediationResourceKey | undefined {
        return this['resource_key'];
    }
    public withInvocationTime(invocationTime: string): RemediationExecutionStatus {
        this['invocation_time'] = invocationTime;
        return this;
    }
    public set invocationTime(invocationTime: string  | undefined) {
        this['invocation_time'] = invocationTime;
    }
    public get invocationTime(): string | undefined {
        return this['invocation_time'];
    }
    public withState(state: RemediationExecutionStatusStateEnum | string): RemediationExecutionStatus {
        this['state'] = state;
        return this;
    }
    public withMessage(message: string): RemediationExecutionStatus {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RemediationExecutionStatusStateEnum {
    IN_QUEUE = 'IN_QUEUE',
    IN_PROGRESS = 'IN_PROGRESS',
    SUCCEEDED = 'SUCCEEDED',
    FAILED = 'FAILED'
}
