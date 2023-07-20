import { PredefineTag } from './PredefineTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPredefineTagsResponse extends SdkResponse {
    public marker?: string;
    private 'total_count'?: number;
    public tags?: Array<PredefineTag>;
    public constructor() { 
        super();
    }
    public withMarker(marker: string): ListPredefineTagsResponse {
        this['marker'] = marker;
        return this;
    }
    public withTotalCount(totalCount: number): ListPredefineTagsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTags(tags: Array<PredefineTag>): ListPredefineTagsResponse {
        this['tags'] = tags;
        return this;
    }
}