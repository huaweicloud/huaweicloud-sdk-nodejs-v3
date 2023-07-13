import { Port } from './Port';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPortsResponse extends SdkResponse {
    public ports?: Array<Port>;
    public constructor() { 
        super();
    }
    public withPorts(ports: Array<Port>): ListPortsResponse {
        this['ports'] = ports;
        return this;
    }
}