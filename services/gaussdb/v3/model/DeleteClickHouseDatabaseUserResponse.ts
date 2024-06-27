
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteClickHouseDatabaseUserResponse extends SdkResponse {
    public result?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): DeleteClickHouseDatabaseUserResponse {
        this['result'] = result;
        return this;
    }
}