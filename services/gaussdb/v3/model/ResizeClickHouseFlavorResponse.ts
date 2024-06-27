
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResizeClickHouseFlavorResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): ResizeClickHouseFlavorResponse {
        this['result'] = result;
        return this;
    }
}