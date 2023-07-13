import { StackResource } from './StackResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStackResourcesResponse extends SdkResponse {
    private 'stack_resources'?: Array<StackResource> | undefined;
    public constructor() { 
        super();
    }
    public withStackResources(stackResources: Array<StackResource>): ListStackResourcesResponse {
        this['stack_resources'] = stackResources;
        return this;
    }
    public set stackResources(stackResources: Array<StackResource> | undefined) {
        this['stack_resources'] = stackResources;
    }
    public get stackResources() {
        return this['stack_resources'];
    }
}