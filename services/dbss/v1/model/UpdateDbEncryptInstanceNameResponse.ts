
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDbEncryptInstanceNameResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateDbEncryptInstanceNameResponse {
        this['result'] = result;
        return this;
    }
}