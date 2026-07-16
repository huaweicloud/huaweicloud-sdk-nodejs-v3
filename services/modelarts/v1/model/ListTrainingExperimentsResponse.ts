import { TrainingExperimentResponse } from './TrainingExperimentResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrainingExperimentsResponse extends SdkResponse {
    public total?: number;
    public count?: number;
    public limit?: number;
    public offset?: number;
    private 'sort_by'?: string;
    public order?: string;
    public items?: Array<TrainingExperimentResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTrainingExperimentsResponse {
        this['total'] = total;
        return this;
    }
    public withCount(count: number): ListTrainingExperimentsResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): ListTrainingExperimentsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTrainingExperimentsResponse {
        this['offset'] = offset;
        return this;
    }
    public withSortBy(sortBy: string): ListTrainingExperimentsResponse {
        this['sort_by'] = sortBy;
        return this;
    }
    public set sortBy(sortBy: string  | undefined) {
        this['sort_by'] = sortBy;
    }
    public get sortBy(): string | undefined {
        return this['sort_by'];
    }
    public withOrder(order: string): ListTrainingExperimentsResponse {
        this['order'] = order;
        return this;
    }
    public withItems(items: Array<TrainingExperimentResponse>): ListTrainingExperimentsResponse {
        this['items'] = items;
        return this;
    }
}