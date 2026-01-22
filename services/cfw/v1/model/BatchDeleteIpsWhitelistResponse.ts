import { IpsWhitelistRespData } from './IpsWhitelistRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteIpsWhitelistResponse extends SdkResponse {
    public data?: IpsWhitelistRespData;
    public constructor() { 
        super();
    }
    public withData(data: IpsWhitelistRespData): BatchDeleteIpsWhitelistResponse {
        this['data'] = data;
        return this;
    }
}