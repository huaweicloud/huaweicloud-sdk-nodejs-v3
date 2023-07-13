import { ServerLimits } from './ServerLimits';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerLimitsResponse extends SdkResponse {
    public absolute?: ServerLimits;
    public constructor() { 
        super();
    }
    public withAbsolute(absolute: ServerLimits): ShowServerLimitsResponse {
        this['absolute'] = absolute;
        return this;
    }
}