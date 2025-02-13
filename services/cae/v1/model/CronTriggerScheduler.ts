

export class CronTriggerScheduler {
    public cron?: string;
    private 'target_replica'?: number;
    public constructor() { 
    }
    public withCron(cron: string): CronTriggerScheduler {
        this['cron'] = cron;
        return this;
    }
    public withTargetReplica(targetReplica: number): CronTriggerScheduler {
        this['target_replica'] = targetReplica;
        return this;
    }
    public set targetReplica(targetReplica: number  | undefined) {
        this['target_replica'] = targetReplica;
    }
    public get targetReplica(): number | undefined {
        return this['target_replica'];
    }
}