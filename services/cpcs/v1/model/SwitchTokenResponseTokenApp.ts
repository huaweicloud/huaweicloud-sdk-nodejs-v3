

export class SwitchTokenResponseTokenApp {
    public appName?: string;
    public appId?: string;
    public status?: number;
    public constructor() { 
    }
    public withAppName(appName: string): SwitchTokenResponseTokenApp {
        this['appName'] = appName;
        return this;
    }
    public withAppId(appId: string): SwitchTokenResponseTokenApp {
        this['appId'] = appId;
        return this;
    }
    public withStatus(status: number): SwitchTokenResponseTokenApp {
        this['status'] = status;
        return this;
    }
}