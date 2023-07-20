

export class RestartNodeRequest {
    public delay?: boolean;
    public constructor() { 
    }
    public withDelay(delay: boolean): RestartNodeRequest {
        this['delay'] = delay;
        return this;
    }
}