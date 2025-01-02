

export class InstanceDrInfo {
    public id?: string;
    public status?: string;
    private 'failed_message'?: string;
    private 'replica_state'?: string;
    private 'wal_write_receive_delay_in_mb'?: string;
    private 'wal_write_replay_delay_in_mb'?: string;
    private 'wal_receive_replay_delay_in_ms'?: string;
    private 'master_instance_id'?: string;
    private 'master_region'?: string;
    private 'slave_instance_id'?: string;
    private 'slave_region'?: string;
    private 'build_process'?: string;
    public time?: number;
    public constructor(id?: string, status?: string, masterInstanceId?: string, masterRegion?: string, slaveInstanceId?: string, slaveRegion?: string, time?: number) { 
        this['id'] = id;
        this['status'] = status;
        this['master_instance_id'] = masterInstanceId;
        this['master_region'] = masterRegion;
        this['slave_instance_id'] = slaveInstanceId;
        this['slave_region'] = slaveRegion;
        this['time'] = time;
    }
    public withId(id: string): InstanceDrInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): InstanceDrInfo {
        this['status'] = status;
        return this;
    }
    public withFailedMessage(failedMessage: string): InstanceDrInfo {
        this['failed_message'] = failedMessage;
        return this;
    }
    public set failedMessage(failedMessage: string  | undefined) {
        this['failed_message'] = failedMessage;
    }
    public get failedMessage(): string | undefined {
        return this['failed_message'];
    }
    public withReplicaState(replicaState: string): InstanceDrInfo {
        this['replica_state'] = replicaState;
        return this;
    }
    public set replicaState(replicaState: string  | undefined) {
        this['replica_state'] = replicaState;
    }
    public get replicaState(): string | undefined {
        return this['replica_state'];
    }
    public withWalWriteReceiveDelayInMb(walWriteReceiveDelayInMb: string): InstanceDrInfo {
        this['wal_write_receive_delay_in_mb'] = walWriteReceiveDelayInMb;
        return this;
    }
    public set walWriteReceiveDelayInMb(walWriteReceiveDelayInMb: string  | undefined) {
        this['wal_write_receive_delay_in_mb'] = walWriteReceiveDelayInMb;
    }
    public get walWriteReceiveDelayInMb(): string | undefined {
        return this['wal_write_receive_delay_in_mb'];
    }
    public withWalWriteReplayDelayInMb(walWriteReplayDelayInMb: string): InstanceDrInfo {
        this['wal_write_replay_delay_in_mb'] = walWriteReplayDelayInMb;
        return this;
    }
    public set walWriteReplayDelayInMb(walWriteReplayDelayInMb: string  | undefined) {
        this['wal_write_replay_delay_in_mb'] = walWriteReplayDelayInMb;
    }
    public get walWriteReplayDelayInMb(): string | undefined {
        return this['wal_write_replay_delay_in_mb'];
    }
    public withWalReceiveReplayDelayInMs(walReceiveReplayDelayInMs: string): InstanceDrInfo {
        this['wal_receive_replay_delay_in_ms'] = walReceiveReplayDelayInMs;
        return this;
    }
    public set walReceiveReplayDelayInMs(walReceiveReplayDelayInMs: string  | undefined) {
        this['wal_receive_replay_delay_in_ms'] = walReceiveReplayDelayInMs;
    }
    public get walReceiveReplayDelayInMs(): string | undefined {
        return this['wal_receive_replay_delay_in_ms'];
    }
    public withMasterInstanceId(masterInstanceId: string): InstanceDrInfo {
        this['master_instance_id'] = masterInstanceId;
        return this;
    }
    public set masterInstanceId(masterInstanceId: string  | undefined) {
        this['master_instance_id'] = masterInstanceId;
    }
    public get masterInstanceId(): string | undefined {
        return this['master_instance_id'];
    }
    public withMasterRegion(masterRegion: string): InstanceDrInfo {
        this['master_region'] = masterRegion;
        return this;
    }
    public set masterRegion(masterRegion: string  | undefined) {
        this['master_region'] = masterRegion;
    }
    public get masterRegion(): string | undefined {
        return this['master_region'];
    }
    public withSlaveInstanceId(slaveInstanceId: string): InstanceDrInfo {
        this['slave_instance_id'] = slaveInstanceId;
        return this;
    }
    public set slaveInstanceId(slaveInstanceId: string  | undefined) {
        this['slave_instance_id'] = slaveInstanceId;
    }
    public get slaveInstanceId(): string | undefined {
        return this['slave_instance_id'];
    }
    public withSlaveRegion(slaveRegion: string): InstanceDrInfo {
        this['slave_region'] = slaveRegion;
        return this;
    }
    public set slaveRegion(slaveRegion: string  | undefined) {
        this['slave_region'] = slaveRegion;
    }
    public get slaveRegion(): string | undefined {
        return this['slave_region'];
    }
    public withBuildProcess(buildProcess: string): InstanceDrInfo {
        this['build_process'] = buildProcess;
        return this;
    }
    public set buildProcess(buildProcess: string  | undefined) {
        this['build_process'] = buildProcess;
    }
    public get buildProcess(): string | undefined {
        return this['build_process'];
    }
    public withTime(time: number): InstanceDrInfo {
        this['time'] = time;
        return this;
    }
}