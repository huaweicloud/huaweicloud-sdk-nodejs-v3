import { ListFunctionApplicationResult } from './ListFunctionApplicationResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFunctionApplicationsResponse extends SdkResponse {
    public applications?: Array<ListFunctionApplicationResult>;
    private 'next_marker'?: number;
    public count?: number;
    public constructor() { 
        super();
    }
    public withApplications(applications: Array<ListFunctionApplicationResult>): ListFunctionApplicationsResponse {
        this['applications'] = applications;
        return this;
    }
    public withNextMarker(nextMarker: number): ListFunctionApplicationsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: number  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): number | undefined {
        return this['next_marker'];
    }
    public withCount(count: number): ListFunctionApplicationsResponse {
        this['count'] = count;
        return this;
    }
}