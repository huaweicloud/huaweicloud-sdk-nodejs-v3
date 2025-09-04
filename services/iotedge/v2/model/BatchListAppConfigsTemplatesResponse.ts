import { PageInfoDTO } from './PageInfoDTO';
import { QueryAppConfigsTemplateBriefRespDTO } from './QueryAppConfigsTemplateBriefRespDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListAppConfigsTemplatesResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public templates?: Array<QueryAppConfigsTemplateBriefRespDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListAppConfigsTemplatesResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): BatchListAppConfigsTemplatesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withTemplates(templates: Array<QueryAppConfigsTemplateBriefRespDTO>): BatchListAppConfigsTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
}