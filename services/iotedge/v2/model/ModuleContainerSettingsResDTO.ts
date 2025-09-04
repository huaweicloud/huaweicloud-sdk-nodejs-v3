import { ContainerConfigsResDTO } from './ContainerConfigsResDTO';


export class ModuleContainerSettingsResDTO {
    public configs?: ContainerConfigsResDTO;
    public constructor() { 
    }
    public withConfigs(configs: ContainerConfigsResDTO): ModuleContainerSettingsResDTO {
        this['configs'] = configs;
        return this;
    }
}