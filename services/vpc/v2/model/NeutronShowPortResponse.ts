import { NeutronPort } from './NeutronPort';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronShowPortResponse extends SdkResponse {
    public port?: NeutronPort;
    public constructor() { 
        super();
    }
    public withPort(port: NeutronPort): NeutronShowPortResponse {
        this['port'] = port;
        return this;
    }
}