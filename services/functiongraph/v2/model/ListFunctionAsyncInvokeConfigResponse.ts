import { ListFunctionAsyncInvokeConfigResult } from './ListFunctionAsyncInvokeConfigResult';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFunctionAsyncInvokeConfigResponse extends SdkResponse {
    private 'async_invoke_configs'?: Array<ListFunctionAsyncInvokeConfigResult> | undefined;
    public count?: number;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withAsyncInvokeConfigs(asyncInvokeConfigs: Array<ListFunctionAsyncInvokeConfigResult>): ListFunctionAsyncInvokeConfigResponse {
        this['async_invoke_configs'] = asyncInvokeConfigs;
        return this;
    }
    public set asyncInvokeConfigs(asyncInvokeConfigs: Array<ListFunctionAsyncInvokeConfigResult> | undefined) {
        this['async_invoke_configs'] = asyncInvokeConfigs;
    }
    public get asyncInvokeConfigs() {
        return this['async_invoke_configs'];
    }
    public withCount(count: number): ListFunctionAsyncInvokeConfigResponse {
        this['count'] = count;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListFunctionAsyncInvokeConfigResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}