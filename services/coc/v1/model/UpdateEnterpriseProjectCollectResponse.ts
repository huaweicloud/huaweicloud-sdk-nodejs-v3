
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEnterpriseProjectCollectResponse extends SdkResponse {
    public data?: string;
    public constructor() { 
        super();
    }
    public withData(data: string): UpdateEnterpriseProjectCollectResponse {
        this['data'] = data;
        return this;
    }
}