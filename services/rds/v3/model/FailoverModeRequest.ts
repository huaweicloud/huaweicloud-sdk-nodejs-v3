

export class FailoverModeRequest {
    public mode?: string;
    public constructor(mode?: string) { 
        this['mode'] = mode;
    }
    public withMode(mode: string): FailoverModeRequest {
        this['mode'] = mode;
        return this;
    }
}