
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReplicationStatusResponse extends SdkResponse {
    private 'replication_status'?: string;
    private 'abnormal_reason'?: string;
    public constructor() { 
        super();
    }
    public withReplicationStatus(replicationStatus: string): ShowReplicationStatusResponse {
        this['replication_status'] = replicationStatus;
        return this;
    }
    public set replicationStatus(replicationStatus: string  | undefined) {
        this['replication_status'] = replicationStatus;
    }
    public get replicationStatus(): string | undefined {
        return this['replication_status'];
    }
    public withAbnormalReason(abnormalReason: string): ShowReplicationStatusResponse {
        this['abnormal_reason'] = abnormalReason;
        return this;
    }
    public set abnormalReason(abnormalReason: string  | undefined) {
        this['abnormal_reason'] = abnormalReason;
    }
    public get abnormalReason(): string | undefined {
        return this['abnormal_reason'];
    }
}