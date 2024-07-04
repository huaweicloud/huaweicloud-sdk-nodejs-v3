
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnlockNodeReadonlyStatusResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): UnlockNodeReadonlyStatusResponse {
        this['resp'] = resp;
        return this;
    }
}