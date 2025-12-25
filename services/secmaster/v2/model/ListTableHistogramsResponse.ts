import { SearchQueryResultHistogram } from './SearchQueryResultHistogram';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTableHistogramsResponse extends SdkResponse {
    private 'total_count'?: number;
    public histograms?: Array<SearchQueryResultHistogram>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListTableHistogramsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withHistograms(histograms: Array<SearchQueryResultHistogram>): ListTableHistogramsResponse {
        this['histograms'] = histograms;
        return this;
    }
}