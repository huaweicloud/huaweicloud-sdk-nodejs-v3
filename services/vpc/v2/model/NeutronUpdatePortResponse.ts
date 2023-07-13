import { NeutronPort } from './NeutronPort';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronUpdatePortResponse extends SdkResponse {
    public port?: NeutronPort;
    public constructor() { 
        super();
    }
    public withPort(port: NeutronPort): NeutronUpdatePortResponse {
        this['port'] = port;
        return this;
    }
}