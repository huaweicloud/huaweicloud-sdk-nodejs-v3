

export class EnvTopoRequest {
    private 'target_env_id'?: number;
    public direction?: string;
    private 'end_time'?: string;
    private 'start_time'?: string;
    private 'filter_user'?: boolean;
    public constructor(targetEnvId?: number, endTime?: string, startTime?: string) { 
        this['target_env_id'] = targetEnvId;
        this['end_time'] = endTime;
        this['start_time'] = startTime;
    }
    public withTargetEnvId(targetEnvId: number): EnvTopoRequest {
        this['target_env_id'] = targetEnvId;
        return this;
    }
    public set targetEnvId(targetEnvId: number  | undefined) {
        this['target_env_id'] = targetEnvId;
    }
    public get targetEnvId(): number | undefined {
        return this['target_env_id'];
    }
    public withDirection(direction: string): EnvTopoRequest {
        this['direction'] = direction;
        return this;
    }
    public withEndTime(endTime: string): EnvTopoRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStartTime(startTime: string): EnvTopoRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withFilterUser(filterUser: boolean): EnvTopoRequest {
        this['filter_user'] = filterUser;
        return this;
    }
    public set filterUser(filterUser: boolean  | undefined) {
        this['filter_user'] = filterUser;
    }
    public get filterUser(): boolean | undefined {
        return this['filter_user'];
    }
}