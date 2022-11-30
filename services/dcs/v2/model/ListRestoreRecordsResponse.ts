import { InstanceRestoreInfo } from './InstanceRestoreInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRestoreRecordsResponse extends SdkResponse {
    private 'restore_record_response'?: Array<InstanceRestoreInfo> | undefined;
    private 'total_num'?: number | undefined;
    public constructor() { 
        super();
    }
    public withRestoreRecordResponse(restoreRecordResponse: Array<InstanceRestoreInfo>): ListRestoreRecordsResponse {
        this['restore_record_response'] = restoreRecordResponse;
        return this;
    }
    public set restoreRecordResponse(restoreRecordResponse: Array<InstanceRestoreInfo> | undefined) {
        this['restore_record_response'] = restoreRecordResponse;
    }
    public get restoreRecordResponse() {
        return this['restore_record_response'];
    }
    public withTotalNum(totalNum: number): ListRestoreRecordsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum() {
        return this['total_num'];
    }
}