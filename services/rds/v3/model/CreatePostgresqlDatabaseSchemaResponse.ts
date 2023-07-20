
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePostgresqlDatabaseSchemaResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): CreatePostgresqlDatabaseSchemaResponse {
        this['resp'] = resp;
        return this;
    }
}