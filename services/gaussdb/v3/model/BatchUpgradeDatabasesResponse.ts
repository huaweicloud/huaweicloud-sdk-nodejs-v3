
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpgradeDatabasesResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): BatchUpgradeDatabasesResponse {
        this['resp'] = resp;
        return this;
    }
}