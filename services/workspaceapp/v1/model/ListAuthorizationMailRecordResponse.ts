import { AuthorizationMail } from './AuthorizationMail';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuthorizationMailRecordResponse extends SdkResponse {
    public count?: number;
    public records?: Array<AuthorizationMail>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAuthorizationMailRecordResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<AuthorizationMail>): ListAuthorizationMailRecordResponse {
        this['records'] = records;
        return this;
    }
}