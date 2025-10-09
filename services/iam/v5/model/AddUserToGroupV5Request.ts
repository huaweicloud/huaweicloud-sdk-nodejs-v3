import { AddUserToGroupReqBody } from './AddUserToGroupReqBody';


export class AddUserToGroupV5Request {
    private 'group_id'?: string;
    public body?: AddUserToGroupReqBody;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): AddUserToGroupV5Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withBody(body: AddUserToGroupReqBody): AddUserToGroupV5Request {
        this['body'] = body;
        return this;
    }
}