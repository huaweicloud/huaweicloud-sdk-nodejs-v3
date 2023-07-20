

export class CronConfig {
    public name?: string;
    public cron?: string;
    public count?: number;
    private 'start_time'?: number;
    private 'expired_time'?: number;
    public constructor() { 
    }
    public withName(name: string): CronConfig {
        this['name'] = name;
        return this;
    }
    public withCron(cron: string): CronConfig {
        this['cron'] = cron;
        return this;
    }
    public withCount(count: number): CronConfig {
        this['count'] = count;
        return this;
    }
    public withStartTime(startTime: number): CronConfig {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withExpiredTime(expiredTime: number): CronConfig {
        this['expired_time'] = expiredTime;
        return this;
    }
    public set expiredTime(expiredTime: number  | undefined) {
        this['expired_time'] = expiredTime;
    }
    public get expiredTime(): number | undefined {
        return this['expired_time'];
    }
}