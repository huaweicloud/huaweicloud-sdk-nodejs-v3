import { ModifyTrainingQuotaItem } from './ModifyTrainingQuotaItem';


export class ModifyTrainingQuotaRequest {
    private 'user_id'?: string;
    public quotas?: Array<ModifyTrainingQuotaItem>;
    public constructor(userId?: string, quotas?: Array<ModifyTrainingQuotaItem>) { 
        this['user_id'] = userId;
        this['quotas'] = quotas;
    }
    public withUserId(userId: string): ModifyTrainingQuotaRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withQuotas(quotas: Array<ModifyTrainingQuotaItem>): ModifyTrainingQuotaRequest {
        this['quotas'] = quotas;
        return this;
    }
}