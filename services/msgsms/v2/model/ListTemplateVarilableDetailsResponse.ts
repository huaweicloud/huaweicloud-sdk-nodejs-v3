import { ApiTemplateVariable } from './ApiTemplateVariable';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplateVarilableDetailsResponse extends SdkResponse {
    public results?: Array<ApiTemplateVariable>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withResults(results: Array<ApiTemplateVariable>): ListTemplateVarilableDetailsResponse {
        this['results'] = results;
        return this;
    }
    public withTotal(total: number): ListTemplateVarilableDetailsResponse {
        this['total'] = total;
        return this;
    }
}