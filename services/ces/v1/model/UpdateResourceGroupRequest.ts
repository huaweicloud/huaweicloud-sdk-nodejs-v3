import { UpdateResourceGroupRequestBody } from './UpdateResourceGroupRequestBody';


export class UpdateResourceGroupRequest {
    private 'group_id'?: string;
    public body?: UpdateResourceGroupRequestBody;
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
    public withBody(body: UpdateResourceGroupRequestBody): UpdateResourceGroupRequest {
        this['body'] = body;
        return this;
    }
}