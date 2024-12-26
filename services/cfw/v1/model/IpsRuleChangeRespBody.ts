

export class IpsRuleChangeRespBody {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'group_id'?: string;
    public id?: string;
    private 'ips_ids'?: Array<string>;
    public result?: boolean;
    public constructor() { 
    }
    public withErrorCode(errorCode: string): IpsRuleChangeRespBody {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): IpsRuleChangeRespBody {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withGroupId(groupId: string): IpsRuleChangeRespBody {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withId(id: string): IpsRuleChangeRespBody {
        this['id'] = id;
        return this;
    }
    public withIpsIds(ipsIds: Array<string>): IpsRuleChangeRespBody {
        this['ips_ids'] = ipsIds;
        return this;
    }
    public set ipsIds(ipsIds: Array<string>  | undefined) {
        this['ips_ids'] = ipsIds;
    }
    public get ipsIds(): Array<string> | undefined {
        return this['ips_ids'];
    }
    public withResult(result: boolean): IpsRuleChangeRespBody {
        this['result'] = result;
        return this;
    }
}