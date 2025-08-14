import { PageInfo } from './PageInfo';
import { SensitiveDataDTO } from './SensitiveDataDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecuritySensitiveDataDetailsResponse extends SdkResponse {
    public total?: number;
    public content?: Array<SensitiveDataDTO>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecuritySensitiveDataDetailsResponse {
        this['total'] = total;
        return this;
    }
    public withContent(content: Array<SensitiveDataDTO>): ListSecuritySensitiveDataDetailsResponse {
        this['content'] = content;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListSecuritySensitiveDataDetailsResponse {
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