import { Repository } from './Repository';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNamespaceRepositoriesResponse extends SdkResponse {
    public total?: number;
    public repositories?: Array<Repository>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListNamespaceRepositoriesResponse {
        this['total'] = total;
        return this;
    }
    public withRepositories(repositories: Array<Repository>): ListNamespaceRepositoriesResponse {
        this['repositories'] = repositories;
        return this;
    }
}