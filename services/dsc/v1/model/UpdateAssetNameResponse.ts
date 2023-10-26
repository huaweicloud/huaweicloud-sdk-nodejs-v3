
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAssetNameResponse extends SdkResponse {
    public msg?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMsg(msg: string): UpdateAssetNameResponse {
        this['msg'] = msg;
        return this;
    }
    public withStatus(status: string): UpdateAssetNameResponse {
        this['status'] = status;
        return this;
    }
}