import { FieldVO } from './FieldVO';
import { PageVO } from './PageVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIssueFieldsResponse extends SdkResponse {
    public page?: PageVO;
    public result?: Array<FieldVO>;
    public constructor() { 
        super();
    }
    public withPage(page: PageVO): ListIssueFieldsResponse {
        this['page'] = page;
        return this;
    }
    public withResult(result: Array<FieldVO>): ListIssueFieldsResponse {
        this['result'] = result;
        return this;
    }
}