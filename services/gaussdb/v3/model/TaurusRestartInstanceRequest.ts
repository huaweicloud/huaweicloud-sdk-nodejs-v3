

export class TaurusRestartInstanceRequest {
    public delay?: boolean;
    public constructor() { 
    }
    public withDelay(delay: boolean): TaurusRestartInstanceRequest {
        this['delay'] = delay;
        return this;
    }
}