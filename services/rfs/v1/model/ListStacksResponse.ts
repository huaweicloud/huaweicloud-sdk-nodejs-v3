import { PageInfo } from './PageInfo';
import { Stack } from './Stack';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStacksResponse extends SdkResponse {
    public stacks?: Array<Stack>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withStacks(stacks: Array<Stack>): ListStacksResponse {
        this['stacks'] = stacks;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListStacksResponse {
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