import { CreateDcPointRespDTO } from './CreateDcPointRespDTO';
import { PageInfoDTO } from './PageInfoDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListDcPointsResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public points?: Array<CreateDcPointRespDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListDcPointsResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): BatchListDcPointsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withPoints(points: Array<CreateDcPointRespDTO>): BatchListDcPointsResponse {
        this['points'] = points;
        return this;
    }
}