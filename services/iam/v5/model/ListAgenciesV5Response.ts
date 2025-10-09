import { Agency } from './Agency';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgenciesV5Response extends SdkResponse {
    public agencies?: Array<Agency>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withAgencies(agencies: Array<Agency>): ListAgenciesV5Response {
        this['agencies'] = agencies;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListAgenciesV5Response {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}