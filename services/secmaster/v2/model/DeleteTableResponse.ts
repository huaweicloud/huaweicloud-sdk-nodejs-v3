import { IsapTableProcessStatus } from './IsapTableProcessStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteTableResponse extends SdkResponse {
    private 'table_id'?: string;
    private 'process_status'?: IsapTableProcessStatus;
    private 'delete_time'?: number;
    public constructor() { 
        super();
    }
    public withTableId(tableId: string): DeleteTableResponse {
        this['table_id'] = tableId;
        return this;
    }
    public set tableId(tableId: string  | undefined) {
        this['table_id'] = tableId;
    }
    public get tableId(): string | undefined {
        return this['table_id'];
    }
    public withProcessStatus(processStatus: IsapTableProcessStatus): DeleteTableResponse {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: IsapTableProcessStatus  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): IsapTableProcessStatus | undefined {
        return this['process_status'];
    }
    public withDeleteTime(deleteTime: number): DeleteTableResponse {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
}