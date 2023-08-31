import { AppDetailInfo } from './AppDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppDetailByIdResponse extends SdkResponse {
    public result?: AppDetailInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: AppDetailInfo): ShowAppDetailByIdResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowAppDetailByIdResponse {
        this['status'] = status;
        return this;
    }
}