import { PageResp } from './PageResp';
import { PolicyGroup } from './PolicyGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyTemplateResponse extends SdkResponse {
    public count?: number;
    public items?: Array<PolicyGroup>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPolicyTemplateResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<PolicyGroup>): ListPolicyTemplateResponse {
        this['items'] = items;
        return this;
    }
}