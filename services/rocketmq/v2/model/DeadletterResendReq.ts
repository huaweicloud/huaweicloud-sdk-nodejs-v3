

export class DeadletterResendReq {
    public topic?: string;
    private 'msg_id_list'?: Array<string> | undefined;
    public constructor() { 
    }
    public withTopic(topic: string): DeadletterResendReq {
        this['topic'] = topic;
        return this;
    }
    public withMsgIdList(msgIdList: Array<string>): DeadletterResendReq {
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