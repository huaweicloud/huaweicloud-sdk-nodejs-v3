

export class UpdatePoolSlowStartOption {
    public enable?: boolean;
    public duration?: number;
    public constructor() { 
    }
    public withEnable(enable: boolean): UpdatePoolSlowStartOption {
        this['enable'] = enable;
        return this;
    }
    public withDuration(duration: number): UpdatePoolSlowStartOption {
        this['duration'] = duration;
        return this;
    }
}