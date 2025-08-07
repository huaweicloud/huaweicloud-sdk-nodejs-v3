

export class RestartConfiguration {
    private 'restart_server'?: boolean;
    public forcible?: boolean;
    public delay?: boolean;
    public constructor() { 
    }
    public withRestartServer(restartServer: boolean): RestartConfiguration {
        this['restart_server'] = restartServer;
        return this;
    }
    public set restartServer(restartServer: boolean  | undefined) {
        this['restart_server'] = restartServer;
    }
    public get restartServer(): boolean | undefined {
        return this['restart_server'];
    }
    public withForcible(forcible: boolean): RestartConfiguration {
        this['forcible'] = forcible;
        return this;
    }
    public withDelay(delay: boolean): RestartConfiguration {
        this['delay'] = delay;
        return this;
    }
}