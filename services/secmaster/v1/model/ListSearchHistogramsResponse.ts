import { Histogram } from './Histogram';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSearchHistogramsResponse extends SdkResponse {
    public histograms?: Array<Histogram>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withHistograms(histograms: Array<Histogram>): ListSearchHistogramsResponse {
        this['histograms'] = histograms;
        return this;
    }
    public withTotalCount(totalCount: number): ListSearchHistogramsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}