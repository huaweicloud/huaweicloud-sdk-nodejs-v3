import { UpdateGroupReqBody } from './UpdateGroupReqBody';


export class UpdateGroupV5Request {
    private 'group_id'?: string;
    public body?: UpdateGroupReqBody;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): UpdateGroupV5Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: UpdateGroupReqBody): UpdateGroupV5Request {
        this['body'] = body;
        return this;
    }
}