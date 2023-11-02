import { ProfileInfo } from './ProfileInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDataProfileResponse extends SdkResponse {
    public data?: ProfileInfo;
    public rowkey?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withData(data: ProfileInfo): ShowDataProfileResponse {
        this['data'] = data;
        return this;
    }
    public withRowkey(rowkey: string): ShowDataProfileResponse {
        this['rowkey'] = rowkey;
        return this;
    }
    public withStatus(status: string): ShowDataProfileResponse {
        this['status'] = status;
        return this;
    }
}