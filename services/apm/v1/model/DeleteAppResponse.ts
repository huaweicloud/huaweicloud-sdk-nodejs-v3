
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAppResponse extends SdkResponse {
    public ok?: string;
    public constructor() { 
        super();
    }
    public withOk(ok: string): DeleteAppResponse {
        this['ok'] = ok;
        return this;
    }
}