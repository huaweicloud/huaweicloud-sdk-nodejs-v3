
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDatabaseOwnerResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): UpdateDatabaseOwnerResponse {
        this['resp'] = resp;
        return this;
    }
}