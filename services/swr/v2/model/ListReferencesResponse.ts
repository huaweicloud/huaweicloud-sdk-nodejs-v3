
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReferencesResponse extends SdkResponse {
    private 'next_marker'?: string;
    private 'has_more'?: boolean;
    public tags?: Array<string>;
    public constructor() { 
        super();
    }
    public withNextMarker(nextMarker: string): ListReferencesResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withHasMore(hasMore: boolean): ListReferencesResponse {
        this['has_more'] = hasMore;
        return this;
    }
    public set hasMore(hasMore: boolean  | undefined) {
        this['has_more'] = hasMore;
    }
    public get hasMore(): boolean | undefined {
        return this['has_more'];
    }
    public withTags(tags: Array<string>): ListReferencesResponse {
        this['tags'] = tags;
        return this;
    }
}