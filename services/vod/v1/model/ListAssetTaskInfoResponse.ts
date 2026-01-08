import { Result } from './Result';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssetTaskInfoResponse extends SdkResponse {
    public results?: Array<Result>;
    public count?: number;
    private 'next_marker'?: string;
    public constructor() { 
        super();
    }
    public withResults(results: Array<Result>): ListAssetTaskInfoResponse {
        this['results'] = results;
        return this;
    }
    public withCount(count: number): ListAssetTaskInfoResponse {
        this['count'] = count;
        return this;
    }
    public withNextMarker(nextMarker: string): ListAssetTaskInfoResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
}