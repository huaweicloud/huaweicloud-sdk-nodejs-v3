import { ListUserQuotaDetail } from './ListUserQuotaDetail';


export class UserQuotaInfo {
    private 'user_id'?: string;
    public quota?: ListUserQuotaDetail;
    public usage?: ListUserQuotaDetail;
    public constructor(userId?: string, quota?: ListUserQuotaDetail) { 
        this['user_id'] = userId;
        this['quota'] = quota;
    }
    public withUserId(userId: string): UserQuotaInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withQuota(quota: ListUserQuotaDetail): UserQuotaInfo {
        this['quota'] = quota;
        return this;
    }
    public withUsage(usage: ListUserQuotaDetail): UserQuotaInfo {
        this['usage'] = usage;
        return this;
    }
}