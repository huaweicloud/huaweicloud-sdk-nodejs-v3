
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDbOmInstanceNameResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateDbOmInstanceNameResponse {
        this['result'] = result;
        return this;
    }
}