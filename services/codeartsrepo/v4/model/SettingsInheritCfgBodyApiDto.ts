import { ProjectSettingsInheritCfgDto } from './ProjectSettingsInheritCfgDto';


export class SettingsInheritCfgBodyApiDto {
    public data?: Array<ProjectSettingsInheritCfgDto>;
    public constructor() { 
    }
    public withData(data: Array<ProjectSettingsInheritCfgDto>): SettingsInheritCfgBodyApiDto {
        this['data'] = data;
        return this;
    }
}