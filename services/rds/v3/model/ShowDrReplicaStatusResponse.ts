
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDrReplicaStatusResponse extends SdkResponse {
    private 'replica_state'?: string;
    private 'wal_write_receive_delay_in_mb'?: string;
    private 'wal_write_replay_delay_in_mb'?: string;
    private 'wal_receive_replay_delay_in_ms'?: string;
    public constructor() { 
        super();
    }
    public withReplicaState(replicaState: string): ShowDrReplicaStatusResponse {
        this['replica_state'] = replicaState;
        return this;
    }
    public set replicaState(replicaState: string  | undefined) {
        this['replica_state'] = replicaState;
    }
    public get replicaState(): string | undefined {
        return this['replica_state'];
    }
    public withWalWriteReceiveDelayInMb(walWriteReceiveDelayInMb: string): ShowDrReplicaStatusResponse {
        this['wal_write_receive_delay_in_mb'] = walWriteReceiveDelayInMb;
        return this;
    }
    public set walWriteReceiveDelayInMb(walWriteReceiveDelayInMb: string  | undefined) {
        this['wal_write_receive_delay_in_mb'] = walWriteReceiveDelayInMb;
    }
    public get walWriteReceiveDelayInMb(): string | undefined {
        return this['wal_write_receive_delay_in_mb'];
    }
    public withWalWriteReplayDelayInMb(walWriteReplayDelayInMb: string): ShowDrReplicaStatusResponse {
        this['wal_write_replay_delay_in_mb'] = walWriteReplayDelayInMb;
        return this;
    }
    public set walWriteReplayDelayInMb(walWriteReplayDelayInMb: string  | undefined) {
        this['wal_write_replay_delay_in_mb'] = walWriteReplayDelayInMb;
    }
    public get walWriteReplayDelayInMb(): string | undefined {
        return this['wal_write_replay_delay_in_mb'];
    }
    public withWalReceiveReplayDelayInMs(walReceiveReplayDelayInMs: string): ShowDrReplicaStatusResponse {
        this['wal_receive_replay_delay_in_ms'] = walReceiveReplayDelayInMs;
        return this;
    }
    public set walReceiveReplayDelayInMs(walReceiveReplayDelayInMs: string  | undefined) {
        this['wal_receive_replay_delay_in_ms'] = walReceiveReplayDelayInMs;
    }
    public get walReceiveReplayDelayInMs(): string | undefined {
        return this['wal_receive_replay_delay_in_ms'];
    }
}