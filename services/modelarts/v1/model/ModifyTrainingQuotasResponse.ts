import { ModifyTrainingQuotaItem } from './ModifyTrainingQuotaItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyTrainingQuotasResponse extends SdkResponse {
    private 'user_id'?: string;
    public quotas?: Array<ModifyTrainingQuotaItem>;
    public constructor() { 
        super();
    }
    public withUserId(userId: string): ModifyTrainingQuotasResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withQuotas(quotas: Array<ModifyTrainingQuotaItem>): ModifyTrainingQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}