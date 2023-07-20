import { RuleCondition } from './RuleCondition';


export class L7Rule {
    private 'admin_state_up'?: boolean;
    private 'compare_type'?: string;
    public key?: string;
    private 'project_id'?: string;
    public type?: L7RuleTypeEnum | string;
    public value?: string;
    private 'provisioning_status'?: string;
    public invert?: boolean;
    public id?: string;
    public conditions?: Array<RuleCondition>;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor(adminStateUp?: boolean, compareType?: string, key?: string, projectId?: string, type?: string, value?: string, provisioningStatus?: string, invert?: boolean, id?: string, conditions?: Array<RuleCondition>) { 
        this['admin_state_up'] = adminStateUp;
        this['compare_type'] = compareType;
        this['key'] = key;
        this['project_id'] = projectId;
        this['type'] = type;
        this['value'] = value;
        this['provisioning_status'] = provisioningStatus;
        this['invert'] = invert;
        this['id'] = id;
        this['conditions'] = conditions;
    }
    public withAdminStateUp(adminStateUp: boolean): L7Rule {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withCompareType(compareType: string): L7Rule {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): string | undefined {
        return this['compare_type'];
    }
    public withKey(key: string): L7Rule {
        this['key'] = key;
        return this;
    }
    public withProjectId(projectId: string): L7Rule {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withType(type: L7RuleTypeEnum | string): L7Rule {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): L7Rule {
        this['value'] = value;
        return this;
    }
    public withProvisioningStatus(provisioningStatus: string): L7Rule {
        this['provisioning_status'] = provisioningStatus;
        return this;
    }
    public set provisioningStatus(provisioningStatus: string  | undefined) {
        this['provisioning_status'] = provisioningStatus;
    }
    public get provisioningStatus(): string | undefined {
        return this['provisioning_status'];
    }
    public withInvert(invert: boolean): L7Rule {
        this['invert'] = invert;
        return this;
    }
    public withId(id: string): L7Rule {
        this['id'] = id;
        return this;
    }
    public withConditions(conditions: Array<RuleCondition>): L7Rule {
        this['conditions'] = conditions;
        return this;
    }
    public withCreatedAt(createdAt: string): L7Rule {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): L7Rule {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum L7RuleTypeEnum {
    HOST_NAME = 'HOST_NAME',
    PATH = 'PATH',
    METHOD = 'METHOD',
    HEADER = 'HEADER',
    QUERY_STRING = 'QUERY_STRING',
    SOURCE_IP = 'SOURCE_IP'
}
