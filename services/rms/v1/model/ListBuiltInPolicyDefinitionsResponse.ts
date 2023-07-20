import { PageInfo } from './PageInfo';
import { PolicyDefinition } from './PolicyDefinition';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBuiltInPolicyDefinitionsResponse extends SdkResponse {
    public value?: Array<PolicyDefinition>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withValue(value: Array<PolicyDefinition>): ListBuiltInPolicyDefinitionsResponse {
        this['value'] = value;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListBuiltInPolicyDefinitionsResponse {
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