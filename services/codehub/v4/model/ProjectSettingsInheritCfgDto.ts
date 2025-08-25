

export class ProjectSettingsInheritCfgDto {
    public name?: ProjectSettingsInheritCfgDtoNameEnum | string;
    private 'inherit_mod'?: ProjectSettingsInheritCfgDtoInheritModEnum | string;
    public constructor() { 
    }
    public withName(name: ProjectSettingsInheritCfgDtoNameEnum | string): ProjectSettingsInheritCfgDto {
        this['name'] = name;
        return this;
    }
    public withInheritMod(inheritMod: ProjectSettingsInheritCfgDtoInheritModEnum | string): ProjectSettingsInheritCfgDto {
        this['inherit_mod'] = inheritMod;
        return this;
    }
    public set inheritMod(inheritMod: ProjectSettingsInheritCfgDtoInheritModEnum | string  | undefined) {
        this['inherit_mod'] = inheritMod;
    }
    public get inheritMod(): ProjectSettingsInheritCfgDtoInheritModEnum | string | undefined {
        return this['inherit_mod'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ProjectSettingsInheritCfgDtoNameEnum {
    PROTECTED_BRANCHES = 'protected_branches',
    PROTECTED_TAGS = 'protected_tags',
    REPOSITORY_SETTINGS = 'repository_settings',
    PUSH_RULES = 'push_rules',
    MERGE_REQUESTS = 'merge_requests',
    E2E_SETTINGS = 'e2e_settings',
    WATERMARK = 'watermark'
}
/**
    * @export
    * @enum {string}
    */
export enum ProjectSettingsInheritCfgDtoInheritModEnum {
    FORCE_INHERIT = 'force_inherit',
    CUSTOM = 'custom'
}
