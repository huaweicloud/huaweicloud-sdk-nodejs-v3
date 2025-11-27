import { RepoResponse } from './RepoResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReposResponse extends SdkResponse {
    public items?: Array<RepoResponse>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withItems(items: Array<RepoResponse>): ListReposResponse {
        this['items'] = items;
        return this;
    }
    public withTotal(total: number): ListReposResponse {
        this['total'] = total;
        return this;
    }
}