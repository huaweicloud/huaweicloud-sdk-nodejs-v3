import { QueryDeptResultDTO } from './QueryDeptResultDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchDepartmentByNameResponse extends SdkResponse {
    public body?: Array<QueryDeptResultDTO>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<QueryDeptResultDTO>): SearchDepartmentByNameResponse {
        this['body'] = body;
        return this;
    }
}