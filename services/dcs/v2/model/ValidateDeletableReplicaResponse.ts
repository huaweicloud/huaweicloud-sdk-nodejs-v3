import { ReplicationInfo } from './ReplicationInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ValidateDeletableReplicaResponse extends SdkResponse {
    private 'check_result'?: boolean;
    private 'available_zone'?: string;
    private 'replication_list'?: Array<ReplicationInfo>;
    public constructor() { 
        super();
    }
    public withCheckResult(checkResult: boolean): ValidateDeletableReplicaResponse {
        this['check_result'] = checkResult;
        return this;
    }
    public set checkResult(checkResult: boolean  | undefined) {
        this['check_result'] = checkResult;
    }
    public get checkResult(): boolean | undefined {
        return this['check_result'];
    }
    public withAvailableZone(availableZone: string): ValidateDeletableReplicaResponse {
        this['available_zone'] = availableZone;
        return this;
    }
    public set availableZone(availableZone: string  | undefined) {
        this['available_zone'] = availableZone;
    }
    public get availableZone(): string | undefined {
        return this['available_zone'];
    }
    public withReplicationList(replicationList: Array<ReplicationInfo>): ValidateDeletableReplicaResponse {
        this['replication_list'] = replicationList;
        return this;
    }
    public set replicationList(replicationList: Array<ReplicationInfo>  | undefined) {
        this['replication_list'] = replicationList;
    }
    public get replicationList(): Array<ReplicationInfo> | undefined {
        return this['replication_list'];
    }
}