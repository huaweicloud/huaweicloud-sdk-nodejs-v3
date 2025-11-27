import { PageInfo } from './PageInfo';
import { StackOutput } from './StackOutput';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackOutputsResponse extends SdkResponse {
    public outputs?: Array<StackOutput>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withOutputs(outputs: Array<StackOutput>): ListStackOutputsResponse {
        this['outputs'] = outputs;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListStackOutputsResponse {
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