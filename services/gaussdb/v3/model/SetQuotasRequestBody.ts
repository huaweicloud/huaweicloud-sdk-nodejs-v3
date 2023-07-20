import { SetQuota } from './SetQuota';


export class SetQuotasRequestBody {
    private 'quota_list'?: Array<SetQuota>;
    public constructor(quotaList?: Array<SetQuota>) { 
        this['quota_list'] = quotaList;
    }
    public withQuotaList(quotaList: Array<SetQuota>): SetQuotasRequestBody {
        this['quota_list'] = quotaList;
        return this;
    }
    public set quotaList(quotaList: Array<SetQuota>  | undefined) {
        this['quota_list'] = quotaList;
    }
    public get quotaList(): Array<SetQuota> | undefined {
        return this['quota_list'];
    }
}