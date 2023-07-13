

export class ResendReq {
    public group?: string;
    private 'client_id'?: string | undefined;
    private 'msg_id_list'?: Array<string> | undefined;
    public constructor() { 
    }
    public withGroup(group: string): ResendReq {
        this['group'] = group;
        return this;
    }
    public withClientId(clientId: string): ResendReq {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId() {
        return this['client_id'];
    }
    public withMsgIdList(msgIdList: Array<string>): ResendReq {
        this['msg_id_list'] = msgIdList;
        return this;
    }
    public set msgIdList(msgIdList: Array<string> | undefined) {
        this['msg_id_list'] = msgIdList;
    }
    public get msgIdList() {
        return this['msg_id_list'];
    }
}