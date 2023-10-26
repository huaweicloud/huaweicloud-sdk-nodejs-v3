
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckMigrationConnectivityResponse extends SdkResponse {
    public body?: string;
    public constructor() { 
        super();
    }
    public withBody(body: string): CheckMigrationConnectivityResponse {
        this['body'] = body;
        return this;
    }
}