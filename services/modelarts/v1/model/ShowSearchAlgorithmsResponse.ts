import { ListSearchAlgorithmsSearchAlgoList } from './ListSearchAlgorithmsSearchAlgoList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSearchAlgorithmsResponse extends SdkResponse {
    private 'search_algo_count'?: number;
    private 'search_algo_list'?: Array<ListSearchAlgorithmsSearchAlgoList>;
    public constructor() { 
        super();
    }
    public withSearchAlgoCount(searchAlgoCount: number): ShowSearchAlgorithmsResponse {
        this['search_algo_count'] = searchAlgoCount;
        return this;
    }
    public set searchAlgoCount(searchAlgoCount: number  | undefined) {
        this['search_algo_count'] = searchAlgoCount;
    }
    public get searchAlgoCount(): number | undefined {
        return this['search_algo_count'];
    }
    public withSearchAlgoList(searchAlgoList: Array<ListSearchAlgorithmsSearchAlgoList>): ShowSearchAlgorithmsResponse {
        this['search_algo_list'] = searchAlgoList;
        return this;
    }
    public set searchAlgoList(searchAlgoList: Array<ListSearchAlgorithmsSearchAlgoList>  | undefined) {
        this['search_algo_list'] = searchAlgoList;
    }
    public get searchAlgoList(): Array<ListSearchAlgorithmsSearchAlgoList> | undefined {
        return this['search_algo_list'];
    }
}