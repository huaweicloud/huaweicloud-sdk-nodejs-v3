import { PutResourceGroupReq } from './PutResourceGroupReq';


export class UpdateResourceGroupRequest {
    private 'group_id'?: string;
    public body?: PutResourceGroupReq;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): UpdateResourceGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: PutResourceGroupReq): UpdateResourceGroupRequest {
        this['body'] = body;
        return this;
    }
}