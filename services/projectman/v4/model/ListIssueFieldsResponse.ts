import { FieldLongDateVO } from './FieldLongDateVO';
import { PageVO } from './PageVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIssueFieldsResponse extends SdkResponse {
    public page?: PageVO;
    public result?: Array<FieldLongDateVO>;
    public constructor() { 
        super();
    }
    public withPage(page: PageVO): ListIssueFieldsResponse {
        this['page'] = page;
        return this;
    }
    public withResult(result: Array<FieldLongDateVO>): ListIssueFieldsResponse {
        this['result'] = result;
        return this;
    }
}