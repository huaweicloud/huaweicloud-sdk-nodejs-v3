import { PageInfo } from './PageInfo';
import { ValidatePolicyFinding } from './ValidatePolicyFinding';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ValidatePolicyResponse extends SdkResponse {
    public findings?: Array<ValidatePolicyFinding>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withFindings(findings: Array<ValidatePolicyFinding>): ValidatePolicyResponse {
        this['findings'] = findings;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ValidatePolicyResponse {
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