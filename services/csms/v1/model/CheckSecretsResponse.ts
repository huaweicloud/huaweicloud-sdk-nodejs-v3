
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckSecretsResponse extends SdkResponse {
    public type?: string;
    public data?: object;
    public constructor() { 
        super();
    }
    public withType(type: string): CheckSecretsResponse {
        this['type'] = type;
        return this;
    }
    public withData(data: object): CheckSecretsResponse {
        this['data'] = data;
        return this;
    }
}