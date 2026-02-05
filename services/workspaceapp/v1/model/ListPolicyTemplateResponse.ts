import { PageResp } from './PageResp';
import { PolicyGroupForTemplate } from './PolicyGroupForTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyTemplateResponse extends SdkResponse {
    public count?: number;
    public items?: Array<PolicyGroupForTemplate>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPolicyTemplateResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<PolicyGroupForTemplate>): ListPolicyTemplateResponse {
        this['items'] = items;
        return this;
    }
}