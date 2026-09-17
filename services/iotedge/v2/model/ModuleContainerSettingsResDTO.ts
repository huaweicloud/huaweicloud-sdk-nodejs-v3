import { ContainerConfigsResDTO } from './ContainerConfigsResDTO';
import { DNSConfigDTO } from './DNSConfigDTO';


export class ModuleContainerSettingsResDTO {
    public configs?: ContainerConfigsResDTO;
    private 'custom_envs'?: object;
    private 'extra_hosts'?: Array<DNSConfigDTO>;
    public constructor() { 
    }
    public withConfigs(configs: ContainerConfigsResDTO): ModuleContainerSettingsResDTO {
        this['configs'] = configs;
        return this;
    }
    public withCustomEnvs(customEnvs: object): ModuleContainerSettingsResDTO {
        this['custom_envs'] = customEnvs;
        return this;
    }
    public set customEnvs(customEnvs: object  | undefined) {
        this['custom_envs'] = customEnvs;
    }
    public get customEnvs(): object | undefined {
        return this['custom_envs'];
    }
    public withExtraHosts(extraHosts: Array<DNSConfigDTO>): ModuleContainerSettingsResDTO {
        this['extra_hosts'] = extraHosts;
        return this;
    }
    public set extraHosts(extraHosts: Array<DNSConfigDTO>  | undefined) {
        this['extra_hosts'] = extraHosts;
    }
    public get extraHosts(): Array<DNSConfigDTO> | undefined {
        return this['extra_hosts'];
    }
}