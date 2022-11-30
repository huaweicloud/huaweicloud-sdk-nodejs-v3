import { Stack } from './Stack';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStacksResponse extends SdkResponse {
    public stacks?: Array<Stack>;
    public constructor() { 
        super();
    }
    public withStacks(stacks: Array<Stack>): ListStacksResponse {
        this['stacks'] = stacks;
        return this;
    }
}