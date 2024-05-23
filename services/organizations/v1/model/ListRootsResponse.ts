import { PageInfoDto } from './PageInfoDto';
import { RootDto } from './RootDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRootsResponse extends SdkResponse {
    public roots?: Array<RootDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withRoots(roots: Array<RootDto>): ListRootsResponse {
        this['roots'] = roots;
        return this;
    }
    public withPageInfo(pageInfo: PageInfoDto): ListRootsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}