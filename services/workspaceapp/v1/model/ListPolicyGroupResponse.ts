import { PageResp } from './PageResp';
import { PolicyGroup } from './PolicyGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyGroupResponse extends SdkResponse {
    public count?: number;
    private 'total_count'?: number;
    public items?: Array<PolicyGroup>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListPolicyGroupResponse {
        this['count'] = count;
        return this;
    }
    public withTotalCount(totalCount: number): ListPolicyGroupResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withItems(items: Array<PolicyGroup>): ListPolicyGroupResponse {
        this['items'] = items;
        return this;
    }
}