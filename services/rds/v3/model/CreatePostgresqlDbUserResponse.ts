
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePostgresqlDbUserResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): CreatePostgresqlDbUserResponse {
        this['resp'] = resp;
        return this;
    }
}