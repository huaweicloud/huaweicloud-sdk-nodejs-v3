

export class ApprovalInfoParam {
    public ids?: Array<number>;
    public msg?: string;
    public constructor(ids?: Array<number>, msg?: string) { 
        this['ids'] = ids;
        this['msg'] = msg;
    }
    public withIds(ids: Array<number>): ApprovalInfoParam {
        this['ids'] = ids;
        return this;
    }
    public withMsg(msg: string): ApprovalInfoParam {
        this['msg'] = msg;
        return this;
    }
}