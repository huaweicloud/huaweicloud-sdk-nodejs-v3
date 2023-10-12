import { ListFunctionAsyncInvocationsResult } from './ListFunctionAsyncInvocationsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListActiveAsyncInvocationsResponse extends SdkResponse {
    public invocations?: Array<ListFunctionAsyncInvocationsResult>;
    public count?: number;
    private 'next_marker'?: number;
    public constructor() { 
        super();
    }
    public withInvocations(invocations: Array<ListFunctionAsyncInvocationsResult>): ListActiveAsyncInvocationsResponse {
        this['invocations'] = invocations;
        return this;
    }
    public withCount(count: number): ListActiveAsyncInvocationsResponse {
        this['count'] = count;
        return this;
    }
    public withNextMarker(nextMarker: number): ListActiveAsyncInvocationsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: number  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): number | undefined {
        return this['next_marker'];
    }
}