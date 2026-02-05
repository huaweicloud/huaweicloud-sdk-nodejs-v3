
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpGroupResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'group_id'?: string;
    private 'enable_ipgroup'?: boolean;
    public type?: string;
    public ipgroup?: object;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowIpGroupResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): ShowIpGroupResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withEnableIpgroup(enableIpgroup: boolean): ShowIpGroupResponse {
        this['enable_ipgroup'] = enableIpgroup;
        return this;
    }
    public set enableIpgroup(enableIpgroup: boolean  | undefined) {
        this['enable_ipgroup'] = enableIpgroup;
    }
    public get enableIpgroup(): boolean | undefined {
        return this['enable_ipgroup'];
    }
    public withType(type: string): ShowIpGroupResponse {
        this['type'] = type;
        return this;
    }
    public withIpgroup(ipgroup: object): ShowIpGroupResponse {
        this['ipgroup'] = ipgroup;
        return this;
    }
}