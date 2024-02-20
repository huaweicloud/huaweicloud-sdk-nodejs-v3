import { Finding } from './Finding';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFindingsResponse extends SdkResponse {
    public findings?: Array<Finding>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withFindings(findings: Array<Finding>): ListFindingsResponse {
        this['findings'] = findings;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListFindingsResponse {
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