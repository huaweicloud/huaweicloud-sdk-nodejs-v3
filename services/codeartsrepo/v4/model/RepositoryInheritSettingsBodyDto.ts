import { RepositoryInheritSettingUpdateBodyDto } from './RepositoryInheritSettingUpdateBodyDto';


export class RepositoryInheritSettingsBodyDto {
    public data?: Array<RepositoryInheritSettingUpdateBodyDto>;
    public constructor() { 
    }
    public withData(data: Array<RepositoryInheritSettingUpdateBodyDto>): RepositoryInheritSettingsBodyDto {
        this['data'] = data;
        return this;
    }
}