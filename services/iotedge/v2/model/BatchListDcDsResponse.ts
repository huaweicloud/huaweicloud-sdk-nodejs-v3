import { PageInfoDTO } from './PageInfoDTO';
import { QueryDcDsBriefRespDTO } from './QueryDcDsBriefRespDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListDcDsResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public datasources?: Array<QueryDcDsBriefRespDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListDcDsResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): BatchListDcDsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withDatasources(datasources: Array<QueryDcDsBriefRespDTO>): BatchListDcDsResponse {
        this['datasources'] = datasources;
        return this;
    }
}