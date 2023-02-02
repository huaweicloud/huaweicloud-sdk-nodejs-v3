import { Grants } from './Grants';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRetirableGrantsResponse extends SdkResponse {
    public grants?: Array<Grants>;
    private 'next_marker'?: string | undefined;
    public truncated?: ListRetirableGrantsResponseTruncatedEnum;
    public constructor() { 
        super();
    }
    public withGrants(grants: Array<Grants>): ListRetirableGrantsResponse {
        this['grants'] = grants;
        return this;
    }
    public withNextMarker(nextMarker: string): ListRetirableGrantsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker() {
        return this['next_marker'];
    }
    public withTruncated(truncated: ListRetirableGrantsResponseTruncatedEnum): ListRetirableGrantsResponse {
        this['truncated'] = truncated;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRetirableGrantsResponseTruncatedEnum {
    TRUE = 'true',
    FALSE = 'false'
}
