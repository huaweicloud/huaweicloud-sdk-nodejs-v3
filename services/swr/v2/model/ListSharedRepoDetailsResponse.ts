import { ShowReposRespV3 } from './ShowReposRespV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSharedRepoDetailsResponse extends SdkResponse {
    public repos?: Array<ShowReposRespV3>;
    public nextMarker?: number;
    public constructor() { 
        super();
    }
    public withRepos(repos: Array<ShowReposRespV3>): ListSharedRepoDetailsResponse {
        this['repos'] = repos;
        return this;
    }
    public withNextMarker(nextMarker: number): ListSharedRepoDetailsResponse {
        this['nextMarker'] = nextMarker;
        return this;
    }
}