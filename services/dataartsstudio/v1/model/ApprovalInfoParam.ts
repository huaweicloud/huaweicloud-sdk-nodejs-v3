

export class ApprovalInfoParam {
    public ids?: Array<string>;
    public msg?: string;
    public constructor(ids?: Array<string>, msg?: string) { 
        this['ids'] = ids;
        this['msg'] = msg;
    }
    public withIds(ids: Array<string>): ApprovalInfoParam {
        this['ids'] = ids;
        return this;
    }
    public withMsg(msg: string): ApprovalInfoParam {
        this['msg'] = msg;
        return this;
    }
}