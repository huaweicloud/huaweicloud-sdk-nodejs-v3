import { PageInfoDTO } from './PageInfoDTO';
import { QueryOtTemplateBriefRespDTO } from './QueryOtTemplateBriefRespDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListOtTemplatesResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public templates?: Array<QueryOtTemplateBriefRespDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListOtTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): BatchListOtTemplatesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withTemplates(templates: Array<QueryOtTemplateBriefRespDTO>): BatchListOtTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}