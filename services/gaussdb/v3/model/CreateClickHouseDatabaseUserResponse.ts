
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClickHouseDatabaseUserResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): CreateClickHouseDatabaseUserResponse {
        this['result'] = result;
        return this;
    }
}