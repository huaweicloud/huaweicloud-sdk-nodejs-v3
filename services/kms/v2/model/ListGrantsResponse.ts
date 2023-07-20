import { Grants } from './Grants';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGrantsResponse extends SdkResponse {
    public grants?: Array<Grants>;
    private 'next_marker'?: string;
    public truncated?: ListGrantsResponseTruncatedEnum | string;
    public total?: number;
    public constructor() { 
        super();
    }
    public withGrants(grants: Array<Grants>): ListGrantsResponse {
        this['grants'] = grants;
        return this;
    }
    public withNextMarker(nextMarker: string): ListGrantsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withTruncated(truncated: ListGrantsResponseTruncatedEnum | string): ListGrantsResponse {
        this['truncated'] = truncated;
        return this;
    }
    public withTotal(total: number): ListGrantsResponse {
        this['total'] = total;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGrantsResponseTruncatedEnum {
    TRUE = 'true',
    FALSE = 'false'
}
