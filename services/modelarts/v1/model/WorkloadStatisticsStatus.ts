

export class WorkloadStatisticsStatus {
    private 'Queue'?: number;
    private 'Pending'?: number;
    private 'Abnormal'?: number;
    private 'Terminating'?: number;
    private 'Creating'?: number;
    private 'Running'?: number;
    private 'Completed'?: number;
    private 'Terminated'?: number;
    private 'Failed'?: number;
    public constructor() { 
    }
    public withQueue(queue: number): WorkloadStatisticsStatus {
        this['Queue'] = queue;
        return this;
    }
    public set queue(queue: number  | undefined) {
        this['Queue'] = queue;
    }
    public get queue(): number | undefined {
        return this['Queue'];
    }
    public withPending(pending: number): WorkloadStatisticsStatus {
        this['Pending'] = pending;
        return this;
    }
    public set pending(pending: number  | undefined) {
        this['Pending'] = pending;
    }
    public get pending(): number | undefined {
        return this['Pending'];
    }
    public withAbnormal(abnormal: number): WorkloadStatisticsStatus {
        this['Abnormal'] = abnormal;
        return this;
    }
    public set abnormal(abnormal: number  | undefined) {
        this['Abnormal'] = abnormal;
    }
    public get abnormal(): number | undefined {
        return this['Abnormal'];
    }
    public withTerminating(terminating: number): WorkloadStatisticsStatus {
        this['Terminating'] = terminating;
        return this;
    }
    public set terminating(terminating: number  | undefined) {
        this['Terminating'] = terminating;
    }
    public get terminating(): number | undefined {
        return this['Terminating'];
    }
    public withCreating(creating: number): WorkloadStatisticsStatus {
        this['Creating'] = creating;
        return this;
    }
    public set creating(creating: number  | undefined) {
        this['Creating'] = creating;
    }
    public get creating(): number | undefined {
        return this['Creating'];
    }
    public withRunning(running: number): WorkloadStatisticsStatus {
        this['Running'] = running;
        return this;
    }
    public set running(running: number  | undefined) {
        this['Running'] = running;
    }
    public get running(): number | undefined {
        return this['Running'];
    }
    public withCompleted(completed: number): WorkloadStatisticsStatus {
        this['Completed'] = completed;
        return this;
    }
    public set completed(completed: number  | undefined) {
        this['Completed'] = completed;
    }
    public get completed(): number | undefined {
        return this['Completed'];
    }
    public withTerminated(terminated: number): WorkloadStatisticsStatus {
        this['Terminated'] = terminated;
        return this;
    }
    public set terminated(terminated: number  | undefined) {
        this['Terminated'] = terminated;
    }
    public get terminated(): number | undefined {
        return this['Terminated'];
    }
    public withFailed(failed: number): WorkloadStatisticsStatus {
        this['Failed'] = failed;
        return this;
    }
    public set failed(failed: number  | undefined) {
        this['Failed'] = failed;
    }
    public get failed(): number | undefined {
        return this['Failed'];
    }
}