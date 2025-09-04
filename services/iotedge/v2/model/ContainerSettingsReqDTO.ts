import { ContainerConfigsReqDTO } from './ContainerConfigsReqDTO';


export class ContainerSettingsReqDTO {
    public configs?: ContainerConfigsReqDTO;
    public constructor() { 
    }
    public withConfigs(configs: ContainerConfigsReqDTO): ContainerSettingsReqDTO {
        this['configs'] = configs;
        return this;
    }
}