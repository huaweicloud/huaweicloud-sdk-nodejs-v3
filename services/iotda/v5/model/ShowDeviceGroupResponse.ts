
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeviceGroupResponse extends SdkResponse {
    private 'group_id'?: string | undefined;
    public name?: string;
    public description?: string;
    private 'super_group_id'?: string | undefined;
    private 'group_type'?: string | undefined;
    private 'dynamic_group_rule'?: string | undefined;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): ShowDeviceGroupResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withName(name: string): ShowDeviceGroupResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowDeviceGroupResponse {
        this['description'] = description;
        return this;
    }
    public withSuperGroupId(superGroupId: string): ShowDeviceGroupResponse {
        this['super_group_id'] = superGroupId;
        return this;
    }
    public set superGroupId(superGroupId: string | undefined) {
        this['super_group_id'] = superGroupId;
    }
    public get superGroupId() {
        return this['super_group_id'];
    }
    public withGroupType(groupType: string): ShowDeviceGroupResponse {
        this['group_type'] = groupType;
        return this;
    }
    public set groupType(groupType: string | undefined) {
        this['group_type'] = groupType;
    }
    public get groupType() {
        return this['group_type'];
    }
    public withDynamicGroupRule(dynamicGroupRule: string): ShowDeviceGroupResponse {
        this['dynamic_group_rule'] = dynamicGroupRule;
        return this;
    }
    public set dynamicGroupRule(dynamicGroupRule: string | undefined) {
        this['dynamic_group_rule'] = dynamicGroupRule;
    }
    public get dynamicGroupRule() {
        return this['dynamic_group_rule'];
    }
}