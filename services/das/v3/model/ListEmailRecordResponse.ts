import { EmailRecord } from './EmailRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEmailRecordResponse extends SdkResponse {
    public total?: number;
    private 'email_record_list'?: Array<EmailRecord>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListEmailRecordResponse {
        this['total'] = total;
        return this;
    }
    public withEmailRecordList(emailRecordList: Array<EmailRecord>): ListEmailRecordResponse {
        this['email_record_list'] = emailRecordList;
        return this;
    }
    public set emailRecordList(emailRecordList: Array<EmailRecord>  | undefined) {
        this['email_record_list'] = emailRecordList;
    }
    public get emailRecordList(): Array<EmailRecord> | undefined {
        return this['email_record_list'];
    }
}