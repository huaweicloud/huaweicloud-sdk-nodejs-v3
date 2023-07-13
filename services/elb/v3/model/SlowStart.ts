

export class SlowStart {
    public enable: boolean;
    public duration: number;
    public constructor(enable?: any, duration?: any) { 
        this['enable'] = enable;
        this['duration'] = duration;
    }
    public withEnable(enable: boolean): SlowStart {
        this['enable'] = enable;
        return this;
    }
    public withDuration(duration: number): SlowStart {
        this['duration'] = duration;
        return this;
    }
}