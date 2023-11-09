import { Hook } from './Hook';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHooksResponse extends SdkResponse {
    public hooks?: Array<Hook>;
    public constructor() { 
        super();
    }
    public withHooks(hooks: Array<Hook>): ListHooksResponse {
        this['hooks'] = hooks;
        return this;
    }
}