import { ShowReposRespV3 } from './ShowReposRespV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRepoDetailsResponse extends SdkResponse {
    public repos?: Array<ShowReposRespV3>;
    public nextMarker?: number;
    public constructor() { 
        super();
    }
    public withRepos(repos: Array<ShowReposRespV3>): ListRepoDetailsResponse {
        this['repos'] = repos;
        return this;
    }
    public withNextMarker(nextMarker: number): ListRepoDetailsResponse {
        this['nextMarker'] = nextMarker;
        return this;
    }
}