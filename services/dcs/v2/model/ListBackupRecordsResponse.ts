import { BackupRecordResponse } from './BackupRecordResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBackupRecordsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'backup_record_response'?: Array<BackupRecordResponse>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListBackupRecordsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withBackupRecordResponse(backupRecordResponse: Array<BackupRecordResponse>): ListBackupRecordsResponse {
        this['backup_record_response'] = backupRecordResponse;
        return this;
    }
    public set backupRecordResponse(backupRecordResponse: Array<BackupRecordResponse>  | undefined) {
        this['backup_record_response'] = backupRecordResponse;
    }
    public get backupRecordResponse(): Array<BackupRecordResponse> | undefined {
        return this['backup_record_response'];
    }
}