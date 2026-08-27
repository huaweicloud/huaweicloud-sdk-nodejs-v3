import { UpdateModelGroupReq } from './UpdateModelGroupReq';


export class UpdateModelGroupRequest {
    private 'group_id'?: string;
    public body?: UpdateModelGroupReq;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): UpdateModelGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: UpdateModelGroupReq): UpdateModelGroupRequest {
        this['body'] = body;
        return this;
    }
}