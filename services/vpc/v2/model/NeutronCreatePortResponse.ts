import { NeutronPort } from './NeutronPort';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronCreatePortResponse extends SdkResponse {
    public port?: NeutronPort;
    public constructor() { 
        super();
    }
    public withPort(port: NeutronPort): NeutronCreatePortResponse {
        this['port'] = port;
        return this;
    }
}