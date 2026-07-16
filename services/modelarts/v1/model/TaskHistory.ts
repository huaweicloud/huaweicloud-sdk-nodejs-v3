

export class TaskHistory {
    public task?: string;
    public ip?: string;
    private 'host_ip'?: string;
    private 'schedule_count'?: number;
    public constructor() { 
    }
    public withTask(task: string): TaskHistory {
        this['task'] = task;
        return this;
    }
    public withIp(ip: string): TaskHistory {
        this['ip'] = ip;
        return this;
    }
    public withHostIp(hostIp: string): TaskHistory {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withScheduleCount(scheduleCount: number): TaskHistory {
        this['schedule_count'] = scheduleCount;
        return this;
    }
    public set scheduleCount(scheduleCount: number  | undefined) {
        this['schedule_count'] = scheduleCount;
    }
    public get scheduleCount(): number | undefined {
        return this['schedule_count'];
    }
}