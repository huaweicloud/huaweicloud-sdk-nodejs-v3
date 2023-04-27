import { StructTemplateModel } from './StructTemplateModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStructTemplateResponse extends SdkResponse {
    public results?: Array<StructTemplateModel>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<StructTemplateModel>): ListStructTemplateResponse {
        this['results'] = results;
        return this;
    }
}