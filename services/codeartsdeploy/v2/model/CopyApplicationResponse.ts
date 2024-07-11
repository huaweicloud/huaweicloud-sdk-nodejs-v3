import { AppBaseInfo } from './AppBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CopyApplicationResponse extends SdkResponse {
    public result?: AppBaseInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: AppBaseInfo): CopyApplicationResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CopyApplicationResponse {
        this['status'] = status;
        return this;
    }
}