

export class AutopilotAuthentication {
    public mode?: string;
    public constructor() { 
    }
    public withMode(mode: string): AutopilotAuthentication {
        this['mode'] = mode;
        return this;
    }
}