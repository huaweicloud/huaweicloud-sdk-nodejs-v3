import { ShowBucketRecord } from './ShowBucketRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBucketObjectsResponse extends SdkResponse {
    private 'next_page'?: boolean;
    private 'next_marker'?: string;
    public records?: Array<ShowBucketRecord>;
    public constructor() { 
        super();
    }
    public withNextPage(nextPage: boolean): ShowBucketObjectsResponse {
        this['next_page'] = nextPage;
        return this;
    }
    public set nextPage(nextPage: boolean  | undefined) {
        this['next_page'] = nextPage;
    }
    public get nextPage(): boolean | undefined {
        return this['next_page'];
    }
    public withNextMarker(nextMarker: string): ShowBucketObjectsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withRecords(records: Array<ShowBucketRecord>): ShowBucketObjectsResponse {
        this['records'] = records;
        return this;
    }
}