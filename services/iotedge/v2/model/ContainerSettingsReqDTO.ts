import { ContainerConfigsReqDTO } from './ContainerConfigsReqDTO';


export class ContainerSettingsReqDTO {
    public configs?: ContainerConfigsReqDTO;
    private 'custom_envs'?: object;
    private 'extra_hosts'?: object;
    public constructor() { 
    }
    public withConfigs(configs: ContainerConfigsReqDTO): ContainerSettingsReqDTO {
        this['configs'] = configs;
        return this;
    }
    public withCustomEnvs(customEnvs: object): ContainerSettingsReqDTO {
        this['custom_envs'] = customEnvs;
        return this;
    }
    public set customEnvs(customEnvs: object  | undefined) {
        this['custom_envs'] = customEnvs;
    }
    public get customEnvs(): object | undefined {
        return this['custom_envs'];
    }
    public withExtraHosts(extraHosts: object): ContainerSettingsReqDTO {
        this['extra_hosts'] = extraHosts;
        return this;
    }
    public set extraHosts(extraHosts: object  | undefined) {
        this['extra_hosts'] = extraHosts;
    }
    public get extraHosts(): object | undefined {
        return this['extra_hosts'];
    }
}