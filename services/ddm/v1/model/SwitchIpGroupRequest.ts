import { ElbIpGroupOpsReq } from './ElbIpGroupOpsReq';


export class SwitchIpGroupRequest {
    private 'instance_id'?: string;
    private 'group_id'?: string;
    public body?: ElbIpGroupOpsReq;
    public constructor(instanceId?: string, groupId?: string) { 
        this['instance_id'] = instanceId;
        this['group_id'] = groupId;
    }
    public withInstanceId(instanceId: string): SwitchIpGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroupId(groupId: string): SwitchIpGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: ElbIpGroupOpsReq): SwitchIpGroupRequest {
        this['body'] = body;
        return this;
    }
}