
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeletePostgresqlDbUserResponse extends SdkResponse {
    public resp?: string;
    public constructor() { 
        super();
    }
    public withResp(resp: string): DeletePostgresqlDbUserResponse {
        this['resp'] = resp;
        return this;
    }
}