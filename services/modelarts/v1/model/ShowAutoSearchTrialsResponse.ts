import { ListAutoSearchTrialsItems } from './ListAutoSearchTrialsItems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoSearchTrialsResponse extends SdkResponse {
    public total?: number;
    public count?: number;
    public limit?: number;
    public offset?: number;
    private 'group_by'?: string;
    public items?: ListAutoSearchTrialsItems;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowAutoSearchTrialsResponse {
        this['total'] = total;
        return this;
    }
    public withCount(count: number): ShowAutoSearchTrialsResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): ShowAutoSearchTrialsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowAutoSearchTrialsResponse {
        this['offset'] = offset;
        return this;
    }
    public withGroupBy(groupBy: string): ShowAutoSearchTrialsResponse {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withItems(items: ListAutoSearchTrialsItems): ShowAutoSearchTrialsResponse {
        this['items'] = items;
        return this;
    }
}