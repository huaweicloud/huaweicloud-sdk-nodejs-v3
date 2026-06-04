
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceAliasResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): UpdateInstanceAliasResponse {
        this['resp'] = resp;
        return this;
    }
}