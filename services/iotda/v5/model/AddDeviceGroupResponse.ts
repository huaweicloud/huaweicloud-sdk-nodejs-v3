
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddDeviceGroupResponse extends SdkResponse {
    private 'group_id'?: string | undefined;
    public name?: string;
    public description?: string;
    private 'super_group_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): AddDeviceGroupResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withName(name: string): AddDeviceGroupResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AddDeviceGroupResponse {
        this['description'] = description;
        return this;
    }
    public withSuperGroupId(superGroupId: string): AddDeviceGroupResponse {
        this['super_group_id'] = superGroupId;
        return this;
    }
    public set superGroupId(superGroupId: string | undefined) {
        this['super_group_id'] = superGroupId;
    }
    public get superGroupId() {
        return this['super_group_id'];
    }
}