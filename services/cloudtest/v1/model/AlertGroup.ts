

export class AlertGroup {
    public dingTalkHookUrl?: string;
    private 'group_name'?: string;
    public id?: string;
    public weChatWorkHookUrl?: string;
    public weLinkGroupNo?: string;
    public constructor() { 
    }
    public withDingTalkHookUrl(dingTalkHookUrl: string): AlertGroup {
        this['dingTalkHookUrl'] = dingTalkHookUrl;
        return this;
    }
    public withGroupName(groupName: string): AlertGroup {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withId(id: string): AlertGroup {
        this['id'] = id;
        return this;
    }
    public withWeChatWorkHookUrl(weChatWorkHookUrl: string): AlertGroup {
        this['weChatWorkHookUrl'] = weChatWorkHookUrl;
        return this;
    }
    public withWeLinkGroupNo(weLinkGroupNo: string): AlertGroup {
        this['weLinkGroupNo'] = weLinkGroupNo;
        return this;
    }
}