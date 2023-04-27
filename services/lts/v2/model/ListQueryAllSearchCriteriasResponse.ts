import { SearchCriteriasBody } from './SearchCriteriasBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQueryAllSearchCriteriasResponse extends SdkResponse {
    private 'search_criterias'?: Array<SearchCriteriasBody> | undefined;
    public constructor() { 
        super();
    }
    public withSearchCriterias(searchCriterias: Array<SearchCriteriasBody>): ListQueryAllSearchCriteriasResponse {
        this['search_criterias'] = searchCriterias;
        return this;
    }
    public set searchCriterias(searchCriterias: Array<SearchCriteriasBody> | undefined) {
        this['search_criterias'] = searchCriterias;
    }
    public get searchCriterias() {
        return this['search_criterias'];
    }
}