import { ServicesInfo } from './ServicesInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRegisterServiceResponse extends SdkResponse {
    public services?: Array<ServicesInfo>;
    public constructor() { 
        super();
    }
    public withServices(services: Array<ServicesInfo>): ShowRegisterServiceResponse {
        this['services'] = services;
        return this;
    }
}