

export class UpdateSnapshotPolicyRequestBody {
    private 'host_id'?: string;
    private 'scheduled_task_status'?: string;
    private 'scheduled_task_time'?: number;
    public constructor(hostId?: string, scheduledTaskStatus?: string) { 
        this['host_id'] = hostId;
        this['scheduled_task_status'] = scheduledTaskStatus;
    }
    public withHostId(hostId: string): UpdateSnapshotPolicyRequestBody {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withScheduledTaskStatus(scheduledTaskStatus: string): UpdateSnapshotPolicyRequestBody {
        this['scheduled_task_status'] = scheduledTaskStatus;
        return this;
    }
    public set scheduledTaskStatus(scheduledTaskStatus: string  | undefined) {
        this['scheduled_task_status'] = scheduledTaskStatus;
    }
    public get scheduledTaskStatus(): string | undefined {
        return this['scheduled_task_status'];
    }
    public withScheduledTaskTime(scheduledTaskTime: number): UpdateSnapshotPolicyRequestBody {
        this['scheduled_task_time'] = scheduledTaskTime;
        return this;
    }
    public set scheduledTaskTime(scheduledTaskTime: number  | undefined) {
        this['scheduled_task_time'] = scheduledTaskTime;
    }
    public get scheduledTaskTime(): number | undefined {
        return this['scheduled_task_time'];
    }
}