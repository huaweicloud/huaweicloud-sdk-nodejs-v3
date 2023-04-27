import { BriefStructTemplateModel } from './BriefStructTemplateModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBreifStructTemplateResponse extends SdkResponse {
    public results?: Array<BriefStructTemplateModel>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<BriefStructTemplateModel>): ListBreifStructTemplateResponse {
        this['results'] = results;
        return this;
    }
}