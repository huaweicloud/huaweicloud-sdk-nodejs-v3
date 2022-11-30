import { Service } from './Service';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowServiceResponse extends SdkResponse {
    public service?: Service;
    public constructor() { 
        super();
    }
    public withService(service: Service): KeystoneShowServiceResponse {
        this['service'] = service;
        return this;
    }
}