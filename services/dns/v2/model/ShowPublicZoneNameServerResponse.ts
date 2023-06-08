import { Nameserver } from './Nameserver';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPublicZoneNameServerResponse extends SdkResponse {
    public nameservers?: Array<Nameserver>;
    public constructor() { 
        super();
    }
    public withNameservers(nameservers: Array<Nameserver>): ShowPublicZoneNameServerResponse {
        this['nameservers'] = nameservers;
        return this;
    }
}