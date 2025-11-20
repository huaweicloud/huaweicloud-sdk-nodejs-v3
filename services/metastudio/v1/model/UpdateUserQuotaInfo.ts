import { UserQuotaDetail } from './UserQuotaDetail';


export class UpdateUserQuotaInfo {
    public quota?: UserQuotaDetail;
    public constructor(quota?: UserQuotaDetail) { 
        this['quota'] = quota;
    }
    public withQuota(quota: UserQuotaDetail): UpdateUserQuotaInfo {
        this['quota'] = quota;
        return this;
    }
}