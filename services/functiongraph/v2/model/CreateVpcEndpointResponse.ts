
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVpcEndpointResponse extends SdkResponse {
    public state?: Array<string>;
    public code?: string;
    public constructor() { 
        super();
    }
    public withState(state: Array<string>): CreateVpcEndpointResponse {
        this['state'] = state;
        return this;
    }
    public withCode(code: string): CreateVpcEndpointResponse {
        this['code'] = code;
        return this;
    }
}