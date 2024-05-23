
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServicesResponse extends SdkResponse {
    public services?: Array<string>;
    public constructor() { 
        super();
    }
    public withServices(services: Array<string>): ListServicesResponse {
        this['services'] = services;
        return this;
    }
}