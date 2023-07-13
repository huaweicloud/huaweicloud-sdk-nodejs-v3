import { NeutronPageLink } from './NeutronPageLink';
import { NeutronPort } from './NeutronPort';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronListPortsResponse extends SdkResponse {
    public ports?: Array<NeutronPort>;
    private 'ports_links'?: Array<NeutronPageLink> | undefined;
    public constructor() { 
        super();
    }
    public withPorts(ports: Array<NeutronPort>): NeutronListPortsResponse {
        this['ports'] = ports;
        return this;
    }
    public withPortsLinks(portsLinks: Array<NeutronPageLink>): NeutronListPortsResponse {
        this['ports_links'] = portsLinks;
        return this;
    }
    public set portsLinks(portsLinks: Array<NeutronPageLink> | undefined) {
        this['ports_links'] = portsLinks;
    }
    public get portsLinks() {
        return this['ports_links'];
    }
}