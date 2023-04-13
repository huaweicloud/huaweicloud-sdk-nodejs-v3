import { UpdateBandwidthPolicyReq } from './UpdateBandwidthPolicyReq';


export class UpdateTaskGroupRequest {
    private 'group_id': string | undefined;
    public body?: UpdateBandwidthPolicyReq;
    public constructor(groupId?: any) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): UpdateTaskGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withBody(body: UpdateBandwidthPolicyReq): UpdateTaskGroupRequest {
        this['body'] = body;
        return this;
    }
}