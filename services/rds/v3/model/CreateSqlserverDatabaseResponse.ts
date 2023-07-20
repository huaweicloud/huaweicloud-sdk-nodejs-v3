
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSqlserverDatabaseResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): CreateSqlserverDatabaseResponse {
        this['resp'] = resp;
        return this;
    }
}