import { IssueCustomField } from './IssueCustomField';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIssueCustomFieldsResponse extends SdkResponse {
    public datas?: Array<IssueCustomField>;
    public constructor() { 
        super();
    }
    public withDatas(datas: Array<IssueCustomField>): ListIssueCustomFieldsResponse {
        this['datas'] = datas;
        return this;
    }
}