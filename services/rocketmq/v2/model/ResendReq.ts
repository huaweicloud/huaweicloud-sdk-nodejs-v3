

export class ResendReq {
    public group?: string;
    public topic?: string;
    private 'client_id'?: string;
    private 'msg_id_list'?: Array<string>;
    public constructor() { 
    }
    public withGroup(group: string): ResendReq {
        this['group'] = group;
        return this;
    }
    public withTopic(topic: string): ResendReq {
        this['topic'] = topic;
        return this;
    }
    public withClientId(clientId: string): ResendReq {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
    public withMsgIdList(msgIdList: Array<string>): ResendReq {
        this['msg_id_list'] = msgIdList;
        return this;
    }
    public set msgIdList(msgIdList: Array<string>  | undefined) {
        this['msg_id_list'] = msgIdList;
    }
    public get msgIdList(): Array<string> | undefined {
        return this['msg_id_list'];
    }
}