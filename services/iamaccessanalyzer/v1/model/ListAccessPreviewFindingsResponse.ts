import { PageInfo } from './PageInfo';
import { PreviewFinding } from './PreviewFinding';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessPreviewFindingsResponse extends SdkResponse {
    public findings?: Array<PreviewFinding>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withFindings(findings: Array<PreviewFinding>): ListAccessPreviewFindingsResponse {
        this['findings'] = findings;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListAccessPreviewFindingsResponse {
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