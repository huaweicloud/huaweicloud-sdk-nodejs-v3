import { RemoveUserFromGroupReqBody } from './RemoveUserFromGroupReqBody';


export class RemoveUserFromGroupV5Request {
    private 'group_id'?: string;
    public body?: RemoveUserFromGroupReqBody;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): RemoveUserFromGroupV5Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: RemoveUserFromGroupReqBody): RemoveUserFromGroupV5Request {
        this['body'] = body;
        return this;
    }
}