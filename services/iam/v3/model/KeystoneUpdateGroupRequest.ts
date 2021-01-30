import { KeystoneUpdateGroupRequestBody } from './KeystoneUpdateGroupRequestBody';


export class KeystoneUpdateGroupRequest {
    private 'group_id': string | undefined;
    public body?: KeystoneUpdateGroupRequestBody;
    public constructor(groupId: any) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): KeystoneUpdateGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withBody(body: KeystoneUpdateGroupRequestBody): KeystoneUpdateGroupRequest {
        this['body'] = body;
        return this;
    }
}