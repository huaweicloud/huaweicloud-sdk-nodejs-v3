import { ShowReposTagRespV3 } from './ShowReposTagRespV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepositoryTagResponse extends SdkResponse {
    public tags?: Array<ShowReposTagRespV3>;
    public nextMarker?: string;
    public constructor() { 
        super();
    }
    public withTags(tags: Array<ShowReposTagRespV3>): ListRepositoryTagResponse {
        this['tags'] = tags;
        return this;
    }
    public withNextMarker(nextMarker: string): ListRepositoryTagResponse {
        this['nextMarker'] = nextMarker;
        return this;
    }
}