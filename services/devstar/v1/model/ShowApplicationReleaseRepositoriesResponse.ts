import { ReleaseRepository } from './ReleaseRepository';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplicationReleaseRepositoriesResponse extends SdkResponse {
    private 'release_repositories'?: Array<ReleaseRepository> | undefined;
    public count?: number;
    public constructor() { 
        super();
    }
    public withReleaseRepositories(releaseRepositories: Array<ReleaseRepository>): ShowApplicationReleaseRepositoriesResponse {
        this['release_repositories'] = releaseRepositories;
        return this;
    }
    public set releaseRepositories(releaseRepositories: Array<ReleaseRepository> | undefined) {
        this['release_repositories'] = releaseRepositories;
    }
    public get releaseRepositories() {
        return this['release_repositories'];
    }
    public withCount(count: number): ShowApplicationReleaseRepositoriesResponse {
        this['count'] = count;
        return this;
    }
}