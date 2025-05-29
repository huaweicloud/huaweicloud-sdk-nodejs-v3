import { SearchDetailV2 } from './SearchDetailV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFactoryFullTextResponse extends SdkResponse {
    public limit?: number;
    public offset?: number;
    private 'search_details'?: Array<SearchDetailV2>;
    private 'total_hits'?: number;
    public constructor() { 
        super();
    }
    public withLimit(limit: number): ShowFactoryFullTextResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowFactoryFullTextResponse {
        this['offset'] = offset;
        return this;
    }
    public withSearchDetails(searchDetails: Array<SearchDetailV2>): ShowFactoryFullTextResponse {
        this['search_details'] = searchDetails;
        return this;
    }
    public set searchDetails(searchDetails: Array<SearchDetailV2>  | undefined) {
        this['search_details'] = searchDetails;
    }
    public get searchDetails(): Array<SearchDetailV2> | undefined {
        return this['search_details'];
    }
    public withTotalHits(totalHits: number): ShowFactoryFullTextResponse {
        this['total_hits'] = totalHits;
        return this;
    }
    public set totalHits(totalHits: number  | undefined) {
        this['total_hits'] = totalHits;
    }
    public get totalHits(): number | undefined {
        return this['total_hits'];
    }
}