import { PageInfo } from './PageInfo';
import { Template } from './Template';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesResponse extends SdkResponse {
    public templates?: Array<Template>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withTemplates(templates: Array<Template>): ListTemplatesResponse {
        this['templates'] = templates;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListTemplatesResponse {
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