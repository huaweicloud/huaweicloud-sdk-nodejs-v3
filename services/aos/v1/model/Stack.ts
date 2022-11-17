import { StackDescriptionPrimitiveTypeHolder } from './StackDescriptionPrimitiveTypeHolder';
import { StackIdPrimitiveTypeHolder } from './StackIdPrimitiveTypeHolder';
import { StackNamePrimitiveTypeHolder } from './StackNamePrimitiveTypeHolder';
import { StackStatusPrimitiveTypeHolder } from './StackStatusPrimitiveTypeHolder';


export class Stack {
    private 'stack_name': string | undefined;
    public description?: string;
    private 'stack_id'?: string | undefined;
    public status?: StackStatusEnum;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    private 'status_message'?: string | undefined;
    public constructor(stackName?: any) { 
        this['stack_name'] = stackName;
    }
    public withStackName(stackName: string): Stack {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName() {
        return this['stack_name'];
    }
    public withDescription(description: string): Stack {
        this['description'] = description;
        return this;
    }
    public withStackId(stackId: string): Stack {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId() {
        return this['stack_id'];
    }
    public withStatus(status: StackStatusEnum): Stack {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): Stack {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): Stack {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withStatusMessage(statusMessage: string): Stack {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage() {
        return this['status_message'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StackStatusEnum {
    CREATION_COMPLETE = 'CREATION_COMPLETE',
    DEPLOYMENT_IN_PROGRESS = 'DEPLOYMENT_IN_PROGRESS',
    DEPLOYMENT_FAILED = 'DEPLOYMENT_FAILED',
    DEPLOYMENT_COMPLETE = 'DEPLOYMENT_COMPLETE',
    ROLLBACK_IN_PROGRESS = 'ROLLBACK_IN_PROGRESS',
    ROLLBACK_FAILED = 'ROLLBACK_FAILED',
    ROLLBACK_COMPLETE = 'ROLLBACK_COMPLETE',
    DELETION_IN_PROGRESS = 'DELETION_IN_PROGRESS',
    DELETION_FAILED = 'DELETION_FAILED'
}
