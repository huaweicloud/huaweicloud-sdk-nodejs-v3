import { PageInfo } from './PageInfo';
import { TemplateVersion } from './TemplateVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplateVersionsResponse extends SdkResponse {
    public versions?: Array<TemplateVersion>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<TemplateVersion>): ListTemplateVersionsResponse {
        this['versions'] = versions;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListTemplateVersionsResponse {
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