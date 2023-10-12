import { StackSet } from './StackSet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackSetsResponse extends SdkResponse {
    private 'stack_sets'?: Array<StackSet>;
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
}