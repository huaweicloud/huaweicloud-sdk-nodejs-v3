import { MonitorTaskInfo } from './MonitorTaskInfo';
import { SnapshotProgressInfo } from './SnapshotProgressInfo';


export class JobMonitorInfo {
    private 'update_time'?: number;
    private 'node_id'?: string;
    private 'consume_position'?: string;
    private 'origin_position'?: string;
    private 'running_status'?: string;
    private 'total_task_props'?: object;
    private 'task_info'?: Array<MonitorTaskInfo>;
    private 'snapshot_progress'?: SnapshotProgressInfo;
    public constructor() { 
    }
    public withUpdateTime(updateTime: number): JobMonitorInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withNodeId(nodeId: string): JobMonitorInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withConsumePosition(consumePosition: string): JobMonitorInfo {
        this['consume_position'] = consumePosition;
        return this;
    }
    public set consumePosition(consumePosition: string  | undefined) {
        this['consume_position'] = consumePosition;
    }
    public get consumePosition(): string | undefined {
        return this['consume_position'];
    }
    public withOriginPosition(originPosition: string): JobMonitorInfo {
        this['origin_position'] = originPosition;
        return this;
    }
    public set originPosition(originPosition: string  | undefined) {
        this['origin_position'] = originPosition;
    }
    public get originPosition(): string | undefined {
        return this['origin_position'];
    }
    public withRunningStatus(runningStatus: string): JobMonitorInfo {
        this['running_status'] = runningStatus;
        return this;
    }
    public set runningStatus(runningStatus: string  | undefined) {
        this['running_status'] = runningStatus;
    }
    public get runningStatus(): string | undefined {
        return this['running_status'];
    }
    public withTotalTaskProps(totalTaskProps: object): JobMonitorInfo {
        this['total_task_props'] = totalTaskProps;
        return this;
    }
    public set totalTaskProps(totalTaskProps: object  | undefined) {
        this['total_task_props'] = totalTaskProps;
    }
    public get totalTaskProps(): object | undefined {
        return this['total_task_props'];
    }
    public withTaskInfo(taskInfo: Array<MonitorTaskInfo>): JobMonitorInfo {
        this['task_info'] = taskInfo;
        return this;
    }
    public set taskInfo(taskInfo: Array<MonitorTaskInfo>  | undefined) {
        this['task_info'] = taskInfo;
    }
    public get taskInfo(): Array<MonitorTaskInfo> | undefined {
        return this['task_info'];
    }
    public withSnapshotProgress(snapshotProgress: SnapshotProgressInfo): JobMonitorInfo {
        this['snapshot_progress'] = snapshotProgress;
        return this;
    }
    public set snapshotProgress(snapshotProgress: SnapshotProgressInfo  | undefined) {
        this['snapshot_progress'] = snapshotProgress;
    }
    public get snapshotProgress(): SnapshotProgressInfo | undefined {
        return this['snapshot_progress'];
    }
}