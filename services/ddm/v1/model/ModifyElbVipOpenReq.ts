

export class ModifyElbVipOpenReq {
    private 'group_id'?: string;
    private 'new_ip'?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): ModifyElbVipOpenReq {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withNewIp(newIp: string): ModifyElbVipOpenReq {
        this['new_ip'] = newIp;
        return this;
    }
    public set newIp(newIp: string  | undefined) {
        this['new_ip'] = newIp;
    }
    public get newIp(): string | undefined {
        return this['new_ip'];
    }
}