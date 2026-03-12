import { InstanceRepository } from './InstanceRepository';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllInstanceRepositoriesResponse extends SdkResponse {
    private 'page_info'?: PageInfo;
    public repositories?: Array<InstanceRepository>;
    public constructor() { 
        super();
    }
    public withPageInfo(pageInfo: PageInfo): ListAllInstanceRepositoriesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRepositories(repositories: Array<InstanceRepository>): ListAllInstanceRepositoriesResponse {
        this['repositories'] = repositories;
        return this;
    }
}