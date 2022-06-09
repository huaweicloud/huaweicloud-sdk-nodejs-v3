

export class CreatePoolSlowStartOption {
    public enable?: boolean;
    public duration?: number;
    public constructor() { 
    }
    public withEnable(enable: boolean): CreatePoolSlowStartOption {
        this['enable'] = enable;
        return this;
    }
    public withDuration(duration: number): CreatePoolSlowStartOption {
        this['duration'] = duration;
        return this;
    }
}