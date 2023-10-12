import { StackSetOperation } from './StackSetOperation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackSetOperationsResponse extends SdkResponse {
    private 'stack_set_operations'?: Array<StackSetOperation>;
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
}