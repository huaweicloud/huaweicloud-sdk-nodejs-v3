import { IpsProtectModeObject } from './IpsProtectModeObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpsProtectModeResponse extends SdkResponse {
    public data?: IpsProtectModeObject;
    public constructor() { 
        super();
    }
    public withData(data: IpsProtectModeObject): ListIpsProtectModeResponse {
        this['data'] = data;
        return this;
    }
}