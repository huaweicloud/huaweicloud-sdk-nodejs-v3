import { PageInfo } from './PageInfo';
import { StackSet } from './StackSet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackSetsResponse extends SdkResponse {
    private 'stack_sets'?: Array<StackSet>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withStackSets(stackSets: Array<StackSet>): ListStackSetsResponse {
        this['stack_sets'] = stackSets;
        return this;
    }
    public set stackSets(stackSets: Array<StackSet>  | undefined) {
        this['stack_sets'] = stackSets;
    }
    public get stackSets(): Array<StackSet> | undefined {
        return this['stack_sets'];
    }
    public withPageInfo(pageInfo: PageInfo): ListStackSetsResponse {
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