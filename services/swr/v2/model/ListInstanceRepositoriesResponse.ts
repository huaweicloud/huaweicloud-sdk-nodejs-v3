import { Repository } from './Repository';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceRepositoriesResponse extends SdkResponse {
    public total?: number;
    public repositories?: Array<Repository>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceRepositoriesResponse {
        this['total'] = total;
        return this;
    }
    public withRepositories(repositories: Array<Repository>): ListInstanceRepositoriesResponse {
        this['repositories'] = repositories;
        return this;
    }
}