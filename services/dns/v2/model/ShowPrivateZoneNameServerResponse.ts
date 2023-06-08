import { PrivateNameServer } from './PrivateNameServer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPrivateZoneNameServerResponse extends SdkResponse {
    public nameservers?: Array<PrivateNameServer>;
    public constructor() { 
        super();
    }
    public withNameservers(nameservers: Array<PrivateNameServer>): ShowPrivateZoneNameServerResponse {
        this['nameservers'] = nameservers;
        return this;
    }
}