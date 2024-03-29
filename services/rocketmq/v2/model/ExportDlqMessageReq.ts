

export class ExportDlqMessageReq {
    public topic?: string;
    private 'msg_id_list'?: Array<string>;
    private 'uniq_key_list'?: Array<string>;
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
    public set msgIdList(msgIdList: Array<string>  | undefined) {
        this['msg_id_list'] = msgIdList;
    }
    public get msgIdList(): Array<string> | undefined {
        return this['msg_id_list'];
    }
    public withUniqKeyList(uniqKeyList: Array<string>): ExportDlqMessageReq {
        this['uniq_key_list'] = uniqKeyList;
        return this;
    }
    public set uniqKeyList(uniqKeyList: Array<string>  | undefined) {
        this['uniq_key_list'] = uniqKeyList;
    }
    public get uniqKeyList(): Array<string> | undefined {
        return this['uniq_key_list'];
    }
}