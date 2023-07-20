import { NoSQLDrDateSyncIndicators } from './NoSQLDrDateSyncIndicators';
import { NoSQLDrRpoAndRto } from './NoSQLDrRpoAndRto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPauseResumeStutusResponse extends SdkResponse {
    private 'master_instance_id'?: string;
    private 'slave_instance_id'?: string;
    public status?: ShowPauseResumeStutusResponseStatusEnum | string;
    private 'data_sync_indicators'?: NoSQLDrDateSyncIndicators;
    private 'rto_and_rpo_indicators'?: Array<NoSQLDrRpoAndRto>;
    public constructor() { 
        super();
    }
    public withMasterInstanceId(masterInstanceId: string): ShowPauseResumeStutusResponse {
        this['master_instance_id'] = masterInstanceId;
        return this;
    }
    public set masterInstanceId(masterInstanceId: string  | undefined) {
        this['master_instance_id'] = masterInstanceId;
    }
    public get masterInstanceId(): string | undefined {
        return this['master_instance_id'];
    }
    public withSlaveInstanceId(slaveInstanceId: string): ShowPauseResumeStutusResponse {
        this['slave_instance_id'] = slaveInstanceId;
        return this;
    }
    public set slaveInstanceId(slaveInstanceId: string  | undefined) {
        this['slave_instance_id'] = slaveInstanceId;
    }
    public get slaveInstanceId(): string | undefined {
        return this['slave_instance_id'];
    }
    public withStatus(status: ShowPauseResumeStutusResponseStatusEnum | string): ShowPauseResumeStutusResponse {
        this['status'] = status;
        return this;
    }
    public withDataSyncIndicators(dataSyncIndicators: NoSQLDrDateSyncIndicators): ShowPauseResumeStutusResponse {
        this['data_sync_indicators'] = dataSyncIndicators;
        return this;
    }
    public set dataSyncIndicators(dataSyncIndicators: NoSQLDrDateSyncIndicators  | undefined) {
        this['data_sync_indicators'] = dataSyncIndicators;
    }
    public get dataSyncIndicators(): NoSQLDrDateSyncIndicators | undefined {
        return this['data_sync_indicators'];
    }
    public withRtoAndRpoIndicators(rtoAndRpoIndicators: Array<NoSQLDrRpoAndRto>): ShowPauseResumeStutusResponse {
        this['rto_and_rpo_indicators'] = rtoAndRpoIndicators;
        return this;
    }
    public set rtoAndRpoIndicators(rtoAndRpoIndicators: Array<NoSQLDrRpoAndRto>  | undefined) {
        this['rto_and_rpo_indicators'] = rtoAndRpoIndicators;
    }
    public get rtoAndRpoIndicators(): Array<NoSQLDrRpoAndRto> | undefined {
        return this['rto_and_rpo_indicators'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPauseResumeStutusResponseStatusEnum {
    NA = 'NA',
    NEW = 'NEW',
    SYNCING = 'SYNCING',
    SUSPENDING = 'SUSPENDING',
    SUSPENDED = 'SUSPENDED',
    RECOVERYING = 'RECOVERYING'
}
