

export class BatchDeletePoolsResp {
    public id?: string;
    private 'ret_status'?: string;
    private 'ret_code'?: string;
    public constructor(id?: string, retStatus?: string) { 
        this['id'] = id;
        this['ret_status'] = retStatus;
    }
    public withId(id: string): BatchDeletePoolsResp {
        this['id'] = id;
        return this;
    }
    public withRetStatus(retStatus: string): BatchDeletePoolsResp {
        this['ret_status'] = retStatus;
        return this;
    }
    public set retStatus(retStatus: string  | undefined) {
        this['ret_status'] = retStatus;
    }
    public get retStatus(): string | undefined {
        return this['ret_status'];
    }
    public withRetCode(retCode: string): BatchDeletePoolsResp {
        this['ret_code'] = retCode;
        return this;
    }
    public set retCode(retCode: string  | undefined) {
        this['ret_code'] = retCode;
    }
    public get retCode(): string | undefined {
        return this['ret_code'];
    }
}