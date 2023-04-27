import { IpsProtectModeObject } from './IpsProtectModeObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpsProtectModeUsingPostResponse extends SdkResponse {
    public data?: IpsProtectModeObject;
    public constructor() { 
        super();
    }
    public withData(data: IpsProtectModeObject): ListIpsProtectModeUsingPostResponse {
        this['data'] = data;
        return this;
    }
}