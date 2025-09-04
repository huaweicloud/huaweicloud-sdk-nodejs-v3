import { EdgeModuleDTO } from './EdgeModuleDTO';
import { PageInfoDTO } from './PageInfoDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListModulesResponse extends SdkResponse {
    public count?: number;
    private 'page_info'?: PageInfoDTO;
    public modules?: Array<EdgeModuleDTO>;
    public constructor() { 
        super();
    }
    public withCount(count: number): BatchListModulesResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDTO): BatchListModulesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDTO  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDTO | undefined {
        return this['page_info'];
    }
    public withModules(modules: Array<EdgeModuleDTO>): BatchListModulesResponse {
        this['modules'] = modules;
        return this;
    }
}