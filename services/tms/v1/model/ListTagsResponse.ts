import { TagListErrorItem } from './TagListErrorItem';
import { TagResponse } from './TagResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTagsResponse extends SdkResponse {
    public tags?: Array<TagResponse>;
    public errors?: Array<TagListErrorItem>;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<TagResponse>): ListTagsResponse {
        this['tags'] = tags;
        return this;
    }
    public withErrors(errors: Array<TagListErrorItem>): ListTagsResponse {
        this['errors'] = errors;
        return this;
    }
}