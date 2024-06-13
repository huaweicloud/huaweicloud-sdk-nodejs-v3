import { PageInfo } from './PageInfo';
import { RemediationException } from './RemediationException';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRemediationExceptionsResponse extends SdkResponse {
    public value?: Array<RemediationException>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withValue(value: Array<RemediationException>): ListRemediationExceptionsResponse {
        this['value'] = value;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListRemediationExceptionsResponse {
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