import { UserQuotaDetail } from './UserQuotaDetail';


export class CreateUserQuotaInfo {
    private 'user_id'?: string;
    public quota?: UserQuotaDetail;
    public constructor(userId?: string, quota?: UserQuotaDetail) { 
        this['user_id'] = userId;
        this['quota'] = quota;
    }
    public withUserId(userId: string): CreateUserQuotaInfo {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withQuota(quota: UserQuotaDetail): CreateUserQuotaInfo {
        this['quota'] = quota;
        return this;
    }
}