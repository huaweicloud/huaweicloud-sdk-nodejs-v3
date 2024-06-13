import { PageInfo } from './PageInfo';
import { RemediationExecution } from './RemediationExecution';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRemediationExecutionStatusesResponse extends SdkResponse {
    public value?: Array<RemediationExecution>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withValue(value: Array<RemediationExecution>): ListRemediationExecutionStatusesResponse {
        this['value'] = value;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListRemediationExecutionStatusesResponse {
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