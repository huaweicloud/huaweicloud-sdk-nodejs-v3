import { StackIdPrimitiveTypeHolder } from './StackIdPrimitiveTypeHolder';
import { StackInstanceStatusMessagePrimitiveTypeHolder } from './StackInstanceStatusMessagePrimitiveTypeHolder';
import { StackInstanceStatusPrimitiveTypeHolder } from './StackInstanceStatusPrimitiveTypeHolder';
import { StackNamePrimitiveTypeHolder } from './StackNamePrimitiveTypeHolder';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';
import { StackSetNamePrimitiveTypeHolder } from './StackSetNamePrimitiveTypeHolder';


export class StackInstance {
    private 'stack_set_id'?: string;
    private 'stack_set_name'?: string;
    public status?: StackInstanceStatusEnum | string;
    private 'status_message'?: string;
    private 'stack_id'?: string;
    private 'stack_name'?: string;
    private 'stack_domain_id'?: string;
    private 'latest_stack_set_operation_id'?: string;
    public region?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(stackSetName?: string) { 
        this['stack_set_name'] = stackSetName;
    }
    public withStackSetId(stackSetId: string): StackInstance {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withStackSetName(stackSetName: string): StackInstance {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withStatus(status: StackInstanceStatusEnum | string): StackInstance {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): StackInstance {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withStackId(stackId: string): StackInstance {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withStackName(stackName: string): StackInstance {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withStackDomainId(stackDomainId: string): StackInstance {
        this['stack_domain_id'] = stackDomainId;
        return this;
    }
    public set stackDomainId(stackDomainId: string  | undefined) {
        this['stack_domain_id'] = stackDomainId;
    }
    public get stackDomainId(): string | undefined {
        return this['stack_domain_id'];
    }
    public withLatestStackSetOperationId(latestStackSetOperationId: string): StackInstance {
        this['latest_stack_set_operation_id'] = latestStackSetOperationId;
        return this;
    }
    public set latestStackSetOperationId(latestStackSetOperationId: string  | undefined) {
        this['latest_stack_set_operation_id'] = latestStackSetOperationId;
    }
    public get latestStackSetOperationId(): string | undefined {
        return this['latest_stack_set_operation_id'];
    }
    public withRegion(region: string): StackInstance {
        this['region'] = region;
        return this;
    }
    public withCreateTime(createTime: string): StackInstance {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): StackInstance {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StackInstanceStatusEnum {
    WAIT_IN_PROGRESS = 'WAIT_IN_PROGRESS',
    CANCEL_COMPLETE = 'CANCEL_COMPLETE',
    OPERATION_IN_PROGRESS = 'OPERATION_IN_PROGRESS',
    OPERATION_FAILED = 'OPERATION_FAILED',
    INOPERABLE = 'INOPERABLE',
    OPERATION_COMPLETE = 'OPERATION_COMPLETE'
}
