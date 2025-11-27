import { PageInfo } from './PageInfo';
import { PrivateHookSummary } from './PrivateHookSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPrivateHooksResponse extends SdkResponse {
    private 'page_info'?: PageInfo;
    public hooks?: Array<PrivateHookSummary>;
    public constructor() { 
        super();
    }
    public withPageInfo(pageInfo: PageInfo): ListPrivateHooksResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withHooks(hooks: Array<PrivateHookSummary>): ListPrivateHooksResponse {
        this['hooks'] = hooks;
        return this;
    }
}