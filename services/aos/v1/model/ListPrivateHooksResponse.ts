import { PrivateHookSummary } from './PrivateHookSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateHooksResponse extends SdkResponse {
    public hooks?: Array<PrivateHookSummary>;
    public constructor() { 
        super();
    }
    public withHooks(hooks: Array<PrivateHookSummary>): ListPrivateHooksResponse {
        this['hooks'] = hooks;
        return this;
    }
}