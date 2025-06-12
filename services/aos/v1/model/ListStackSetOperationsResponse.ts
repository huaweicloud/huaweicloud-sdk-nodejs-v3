import { PageInfo } from './PageInfo';
import { StackSetOperation } from './StackSetOperation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackSetOperationsResponse extends SdkResponse {
    private 'stack_set_operations'?: Array<StackSetOperation>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withStackSetOperations(stackSetOperations: Array<StackSetOperation>): ListStackSetOperationsResponse {
        this['stack_set_operations'] = stackSetOperations;
        return this;
    }
    public set stackSetOperations(stackSetOperations: Array<StackSetOperation>  | undefined) {
        this['stack_set_operations'] = stackSetOperations;
    }
    public get stackSetOperations(): Array<StackSetOperation> | undefined {
        return this['stack_set_operations'];
    }
    public withPageInfo(pageInfo: PageInfo): ListStackSetOperationsResponse {
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