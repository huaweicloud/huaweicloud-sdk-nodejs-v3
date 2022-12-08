import { Errors } from './Errors';
import { Resources } from './Resources';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceResponse extends SdkResponse {
    public resources?: Array<Resources>;
    public errors?: Array<Errors>;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<Resources>): ListResourceResponse {
        this['resources'] = resources;
        return this;
    }
    public withErrors(errors: Array<Errors>): ListResourceResponse {
        this['errors'] = errors;
        return this;
    }
    public withTotalCount(totalCount: number): ListResourceResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}