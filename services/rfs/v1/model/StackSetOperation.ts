import { OperationIdPrimitiveTypeHolder } from './OperationIdPrimitiveTypeHolder';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';
import { StackSetNamePrimitiveTypeHolder } from './StackSetNamePrimitiveTypeHolder';
import { StackSetOperationActionPrimitiveTypeHolder } from './StackSetOperationActionPrimitiveTypeHolder';
import { StackSetOperationCreateTimePrimitiveTypeHolder } from './StackSetOperationCreateTimePrimitiveTypeHolder';
import { StackSetOperationStatusMessagePrimitiveTypeHolder } from './StackSetOperationStatusMessagePrimitiveTypeHolder';
import { StackSetOperationStatusPrimitiveTypeHolder } from './StackSetOperationStatusPrimitiveTypeHolder';
import { StackSetOperationUpdateTimePrimitiveTypeHolder } from './StackSetOperationUpdateTimePrimitiveTypeHolder';


export class StackSetOperation {
    private 'operation_id'?: string;
    private 'stack_set_id'?: string;
    private 'stack_set_name'?: string;
    public action?: StackSetOperationActionEnum | string;
    public status?: StackSetOperationStatusEnum | string;
    private 'status_message'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(stackSetName?: string) { 
        this['stack_set_name'] = stackSetName;
    }
    public withOperationId(operationId: string): StackSetOperation {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
    public withStackSetId(stackSetId: string): StackSetOperation {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withStackSetName(stackSetName: string): StackSetOperation {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withAction(action: StackSetOperationActionEnum | string): StackSetOperation {
        this['action'] = action;
        return this;
    }
    public withStatus(status: StackSetOperationStatusEnum | string): StackSetOperation {
        this['status'] = status;
        return this;
    }
    public withStatusMessage(statusMessage: string): StackSetOperation {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
    public withCreateTime(createTime: string): StackSetOperation {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): StackSetOperation {
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
export enum StackSetOperationActionEnum {
    CREATE_STACK_INSTANCES = 'CREATE_STACK_INSTANCES',
    DELETE_STACK_INSTANCES = 'DELETE_STACK_INSTANCES',
    DEPLOY_STACK_SET = 'DEPLOY_STACK_SET',
    DEPLOY_STACK_INSTANCES = 'DEPLOY_STACK_INSTANCES',
    UPDATE_STACK_INSTANCES = 'UPDATE_STACK_INSTANCES'
}
/**
    * @export
    * @enum {string}
    */
export enum StackSetOperationStatusEnum {
    QUEUE_IN_PROGRESS = 'QUEUE_IN_PROGRESS',
    OPERATION_IN_PROGRESS = 'OPERATION_IN_PROGRESS',
    OPERATION_COMPLETE = 'OPERATION_COMPLETE',
    OPERATION_FAILED = 'OPERATION_FAILED',
    STOP_IN_PROGRESS = 'STOP_IN_PROGRESS',
    STOP_COMPLETE = 'STOP_COMPLETE',
    STOP_FAILED = 'STOP_FAILED'
}
