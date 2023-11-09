import { CommitsCommits } from './CommitsCommits';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCommitsResponse extends SdkResponse {
    public commits?: Array<CommitsCommits>;
    public constructor() { 
        super();
    }
    public withCommits(commits: Array<CommitsCommits>): ListCommitsResponse {
        this['commits'] = commits;
        return this;
    }
}