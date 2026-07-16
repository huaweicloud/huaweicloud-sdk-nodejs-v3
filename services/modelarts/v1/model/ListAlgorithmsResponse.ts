import { AlgorithmResponse } from './AlgorithmResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlgorithmsResponse extends SdkResponse {
    public total?: number;
    public count?: number;
    public limit?: number;
    public offset?: number;
    private 'sort_by'?: string;
    public order?: string;
    private 'group_by'?: string;
    public items?: Array<AlgorithmResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAlgorithmsResponse {
        this['total'] = total;
        return this;
    }
    public withCount(count: number): ListAlgorithmsResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): ListAlgorithmsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAlgorithmsResponse {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): ListAlgorithmsResponse {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: string): ListAlgorithmsResponse {
        this['order'] = order;
        return this;
    }
    public withGroupBy(groupBy: string): ListAlgorithmsResponse {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withItems(items: Array<AlgorithmResponse>): ListAlgorithmsResponse {
        this['items'] = items;
        return this;
    }
}