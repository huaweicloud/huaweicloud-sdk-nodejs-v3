import { UpdateIpsWhitelistRespData } from './UpdateIpsWhitelistRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateIpsWhitelistResponse extends SdkResponse {
    public data?: UpdateIpsWhitelistRespData;
    public constructor() { 
        super();
    }
    public withData(data: UpdateIpsWhitelistRespData): UpdateIpsWhitelistResponse {
        this['data'] = data;
        return this;
    }
}