import { NameServersResp } from './NameServersResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNameServersResponse extends SdkResponse {
    public nameservers?: Array<NameServersResp>;
    public constructor() { 
        super();
    }
    public withNameservers(nameservers: Array<NameServersResp>): ListNameServersResponse {
        this['nameservers'] = nameservers;
        return this;
    }
}