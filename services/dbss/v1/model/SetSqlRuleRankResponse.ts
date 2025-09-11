
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SetSqlRuleRankResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): SetSqlRuleRankResponse {
        this['status'] = status;
        return this;
    }
}