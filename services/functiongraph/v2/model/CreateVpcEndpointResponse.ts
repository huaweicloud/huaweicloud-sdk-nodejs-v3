
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVpcEndpointResponse extends SdkResponse {
    public endpoints?: Array<string>;
    public address?: string;
    public constructor() { 
        super();
    }
    public withEndpoints(endpoints: Array<string>): CreateVpcEndpointResponse {
        this['endpoints'] = endpoints;
        return this;
    }
    public withAddress(address: string): CreateVpcEndpointResponse {
        this['address'] = address;
        return this;
    }
}