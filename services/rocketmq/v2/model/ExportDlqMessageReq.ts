

export class ExportDlqMessageReq {
    public topic?: string;
    private 'msg_id_list'?: Array<string> | undefined;
    private 'uniq_key_list'?: Array<string> | undefined;
    public constructor() { 
    }
    public withTopic(topic: string): ExportDlqMessageReq {
        this['topic'] = topic;
        return this;
    }
    public withMsgIdList(msgIdList: Array<string>): ExportDlqMessageReq {
        this['msg_id_list'] = msgIdList;
        return this;
    }
    public set msgIdList(msgIdList: Array<string> | undefined) {
        this['msg_id_list'] = msgIdList;
    }
    public get msgIdList() {
        return this['msg_id_list'];
    }
    public withUniqKeyList(uniqKeyList: Array<string>): ExportDlqMessageReq {
        this['uniq_key_list'] = uniqKeyList;
        return this;
    }
    public set uniqKeyList(uniqKeyList: Array<string> | undefined) {
        this['uniq_key_list'] = uniqKeyList;
    }
    public get uniqKeyList() {
        return this['uniq_key_list'];
    }
}