import { UserVO } from './UserVO';


export class CommentExtendAttribute {
    public operator?: UserVO;
    private 'operator_id'?: string;
    public action?: string;
    private 'action_us'?: string;
    private 'object_type'?: string;
    private 'pre_status_code'?: string;
    private 'new_status_code'?: string;
    private 'pre_status'?: object;
    private 'new_status'?: object;
    private 'field_type'?: string;
    private 'field_type_id'?: string;
    private 'display_name'?: string;
    public constructor() { 
    }
    public withOperator(operator: UserVO): CommentExtendAttribute {
        this['operator'] = operator;
        return this;
    }
    public withOperatorId(operatorId: string): CommentExtendAttribute {
        this['operator_id'] = operatorId;
        return this;
    }
    public set operatorId(operatorId: string  | undefined) {
        this['operator_id'] = operatorId;
    }
    public get operatorId(): string | undefined {
        return this['operator_id'];
    }
    public withAction(action: string): CommentExtendAttribute {
        this['action'] = action;
        return this;
    }
    public withActionUs(actionUs: string): CommentExtendAttribute {
        this['action_us'] = actionUs;
        return this;
    }
    public set actionUs(actionUs: string  | undefined) {
        this['action_us'] = actionUs;
    }
    public get actionUs(): string | undefined {
        return this['action_us'];
    }
    public withObjectType(objectType: string): CommentExtendAttribute {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: string  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): string | undefined {
        return this['object_type'];
    }
    public withPreStatusCode(preStatusCode: string): CommentExtendAttribute {
        this['pre_status_code'] = preStatusCode;
        return this;
    }
    public set preStatusCode(preStatusCode: string  | undefined) {
        this['pre_status_code'] = preStatusCode;
    }
    public get preStatusCode(): string | undefined {
        return this['pre_status_code'];
    }
    public withNewStatusCode(newStatusCode: string): CommentExtendAttribute {
        this['new_status_code'] = newStatusCode;
        return this;
    }
    public set newStatusCode(newStatusCode: string  | undefined) {
        this['new_status_code'] = newStatusCode;
    }
    public get newStatusCode(): string | undefined {
        return this['new_status_code'];
    }
    public withPreStatus(preStatus: object): CommentExtendAttribute {
        this['pre_status'] = preStatus;
        return this;
    }
    public set preStatus(preStatus: object  | undefined) {
        this['pre_status'] = preStatus;
    }
    public get preStatus(): object | undefined {
        return this['pre_status'];
    }
    public withNewStatus(newStatus: object): CommentExtendAttribute {
        this['new_status'] = newStatus;
        return this;
    }
    public set newStatus(newStatus: object  | undefined) {
        this['new_status'] = newStatus;
    }
    public get newStatus(): object | undefined {
        return this['new_status'];
    }
    public withFieldType(fieldType: string): CommentExtendAttribute {
        this['field_type'] = fieldType;
        return this;
    }
    public set fieldType(fieldType: string  | undefined) {
        this['field_type'] = fieldType;
    }
    public get fieldType(): string | undefined {
        return this['field_type'];
    }
    public withFieldTypeId(fieldTypeId: string): CommentExtendAttribute {
        this['field_type_id'] = fieldTypeId;
        return this;
    }
    public set fieldTypeId(fieldTypeId: string  | undefined) {
        this['field_type_id'] = fieldTypeId;
    }
    public get fieldTypeId(): string | undefined {
        return this['field_type_id'];
    }
    public withDisplayName(displayName: string): CommentExtendAttribute {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
}