import { PublicScriptDetailModel } from './PublicScriptDetailModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetPublicScriptResponse extends SdkResponse {
    public data?: PublicScriptDetailModel;
    public constructor() { 
        super();
    }
    public withData(data: PublicScriptDetailModel): GetPublicScriptResponse {
        this['data'] = data;
        return this;
    }
}