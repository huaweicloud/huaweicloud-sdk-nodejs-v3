import { IpsWhitelistRespData } from './IpsWhitelistRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateIpsWhitelistResponse extends SdkResponse {
    public data?: IpsWhitelistRespData;
    public constructor() { 
        super();
    }
    public withData(data: IpsWhitelistRespData): BatchCreateIpsWhitelistResponse {
        this['data'] = data;
        return this;
    }
}