

export class RepositoryInheritSettingDto {
    public name?: RepositoryInheritSettingDtoNameEnum | string;
    private 'inherit_mod'?: RepositoryInheritSettingDtoInheritModEnum | string;
    public constructor() { 
    }
    public withName(name: RepositoryInheritSettingDtoNameEnum | string): RepositoryInheritSettingDto {
        this['name'] = name;
        return this;
    }
    public withInheritMod(inheritMod: RepositoryInheritSettingDtoInheritModEnum | string): RepositoryInheritSettingDto {
        this['inherit_mod'] = inheritMod;
        return this;
    }
    public set inheritMod(inheritMod: RepositoryInheritSettingDtoInheritModEnum | string  | undefined) {
        this['inherit_mod'] = inheritMod;
    }
    public get inheritMod(): RepositoryInheritSettingDtoInheritModEnum | string | undefined {
        return this['inherit_mod'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RepositoryInheritSettingDtoNameEnum {
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
export enum RepositoryInheritSettingDtoInheritModEnum {
    INHERIT = 'inherit',
    CUSTOM = 'custom',
    FORCE_INHERIT = 'force_inherit'
}
