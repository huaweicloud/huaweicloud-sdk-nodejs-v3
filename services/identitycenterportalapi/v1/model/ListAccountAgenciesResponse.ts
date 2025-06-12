import { AgencyInfo } from './AgencyInfo';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccountAgenciesResponse extends SdkResponse {
    private 'agency_list'?: Array<AgencyInfo>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withAgencyList(agencyList: Array<AgencyInfo>): ListAccountAgenciesResponse {
        this['agency_list'] = agencyList;
        return this;
    }
    public set agencyList(agencyList: Array<AgencyInfo>  | undefined) {
        this['agency_list'] = agencyList;
    }
    public get agencyList(): Array<AgencyInfo> | undefined {
        return this['agency_list'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListAccountAgenciesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}