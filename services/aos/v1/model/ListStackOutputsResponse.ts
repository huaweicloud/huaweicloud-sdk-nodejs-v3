import { StackOutput } from './StackOutput';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackOutputsResponse extends SdkResponse {
    public outputs?: Array<StackOutput>;
    private 'next_marker'?: string | undefined;
    public constructor() { 
        super();
    }
    public withOutputs(outputs: Array<StackOutput>): ListStackOutputsResponse {
        this['outputs'] = outputs;
        return this;
    }
    public withNextMarker(nextMarker: string): ListStackOutputsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker() {
        return this['next_marker'];
    }
}