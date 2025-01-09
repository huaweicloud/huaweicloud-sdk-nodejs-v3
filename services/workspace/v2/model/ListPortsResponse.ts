import { NeutronPort } from './NeutronPort';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPortsResponse extends SdkResponse {
    public ports?: Array<NeutronPort>;
    public constructor() { 
        super();
    }
    public withPorts(ports: Array<NeutronPort>): ListPortsResponse {
        this['ports'] = ports;
        return this;
    }
}