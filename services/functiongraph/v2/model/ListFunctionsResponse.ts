import { ListFunctionResult } from './ListFunctionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFunctionsResponse extends SdkResponse {
    public functions?: Array<ListFunctionResult>;
    private 'next_marker'?: number | undefined;
    public count?: number;
    public constructor() { 
        super();
    }
    public withFunctions(functions: Array<ListFunctionResult>): ListFunctionsResponse {
        this['functions'] = functions;
        return this;
    }
    public withNextMarker(nextMarker: number): ListFunctionsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: number | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker() {
        return this['next_marker'];
    }
    public withCount(count: number): ListFunctionsResponse {
        this['count'] = count;
        return this;
    }
}