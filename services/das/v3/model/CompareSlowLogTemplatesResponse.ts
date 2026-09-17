import { SlowLogTplContrast } from './SlowLogTplContrast';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CompareSlowLogTemplatesResponse extends SdkResponse {
    public contrasts?: Array<SlowLogTplContrast>;
    public constructor() { 
        super();
    }
    public withContrasts(contrasts: Array<SlowLogTplContrast>): CompareSlowLogTemplatesResponse {
        this['contrasts'] = contrasts;
        return this;
    }
}