import { RestartPolicy } from './RestartPolicy';


export class RestartConfiguration {
    private 'restart_server'?: boolean;
    public forcible?: boolean;
    public delay?: boolean;
    private 'restart_policy'?: RestartPolicy;
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
    public withRestartPolicy(restartPolicy: RestartPolicy): RestartConfiguration {
        this['restart_policy'] = restartPolicy;
        return this;
    }
    public set restartPolicy(restartPolicy: RestartPolicy  | undefined) {
        this['restart_policy'] = restartPolicy;
    }
    public get restartPolicy(): RestartPolicy | undefined {
        return this['restart_policy'];
    }
}