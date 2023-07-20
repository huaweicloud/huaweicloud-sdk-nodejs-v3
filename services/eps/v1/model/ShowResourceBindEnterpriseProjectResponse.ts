import { Errors } from './Errors';
import { Resources } from './Resources';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceBindEnterpriseProjectResponse extends SdkResponse {
    public resources?: Array<Resources>;
    public errors?: Array<Errors>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<Resources>): ShowResourceBindEnterpriseProjectResponse {
        this['resources'] = resources;
        return this;
    }
    public withErrors(errors: Array<Errors>): ShowResourceBindEnterpriseProjectResponse {
        this['errors'] = errors;
        return this;
    }
    public withTotalCount(totalCount: number): ShowResourceBindEnterpriseProjectResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}