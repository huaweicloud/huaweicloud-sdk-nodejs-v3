import { PageInfo } from './PageInfo';
import { PrivateModuleSummary } from './PrivateModuleSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateModulesResponse extends SdkResponse {
    public modules?: Array<PrivateModuleSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withModules(modules: Array<PrivateModuleSummary>): ListPrivateModulesResponse {
        this['modules'] = modules;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListPrivateModulesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}