import { PermissionModelPrimitiveTypeHolder } from './PermissionModelPrimitiveTypeHolder';
import { StackSetCreateTimePrimitiveTypeHolder } from './StackSetCreateTimePrimitiveTypeHolder';
import { StackSetDescriptionPrimitiveTypeHolder } from './StackSetDescriptionPrimitiveTypeHolder';
import { StackSetIdPrimitiveTypeHolder } from './StackSetIdPrimitiveTypeHolder';
import { StackSetNamePrimitiveTypeHolder } from './StackSetNamePrimitiveTypeHolder';
import { StackSetStatusPrimitiveTypeHolder } from './StackSetStatusPrimitiveTypeHolder';
import { StackSetUpdateTimePrimitiveTypeHolder } from './StackSetUpdateTimePrimitiveTypeHolder';


export class StackSet {
    private 'stack_set_id'?: string;
    private 'stack_set_name'?: string;
    private 'stack_set_description'?: string;
    private 'permission_model'?: StackSetPermissionModelEnum | string;
    public status?: StackSetStatusEnum | string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(stackSetName?: string) { 
        this['stack_set_name'] = stackSetName;
    }
    public withStackSetId(stackSetId: string): StackSet {
        this['stack_set_id'] = stackSetId;
        return this;
    }
    public set stackSetId(stackSetId: string  | undefined) {
        this['stack_set_id'] = stackSetId;
    }
    public get stackSetId(): string | undefined {
        return this['stack_set_id'];
    }
    public withStackSetName(stackSetName: string): StackSet {
        this['stack_set_name'] = stackSetName;
        return this;
    }
    public set stackSetName(stackSetName: string  | undefined) {
        this['stack_set_name'] = stackSetName;
    }
    public get stackSetName(): string | undefined {
        return this['stack_set_name'];
    }
    public withStackSetDescription(stackSetDescription: string): StackSet {
        this['stack_set_description'] = stackSetDescription;
        return this;
    }
    public set stackSetDescription(stackSetDescription: string  | undefined) {
        this['stack_set_description'] = stackSetDescription;
    }
    public get stackSetDescription(): string | undefined {
        return this['stack_set_description'];
    }
    public withPermissionModel(permissionModel: StackSetPermissionModelEnum | string): StackSet {
        this['permission_model'] = permissionModel;
        return this;
    }
    public set permissionModel(permissionModel: StackSetPermissionModelEnum | string  | undefined) {
        this['permission_model'] = permissionModel;
    }
    public get permissionModel(): StackSetPermissionModelEnum | string | undefined {
        return this['permission_model'];
    }
    public withStatus(status: StackSetStatusEnum | string): StackSet {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): StackSet {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): StackSet {
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
export enum StackSetPermissionModelEnum {
    SELF_MANAGED = 'SELF_MANAGED'
}
/**
    * @export
    * @enum {string}
    */
export enum StackSetStatusEnum {
    IDLE = 'IDLE',
    OPERATION_IN_PROGRESS = 'OPERATION_IN_PROGRESS',
    DEACTIVATED = 'DEACTIVATED'
}
