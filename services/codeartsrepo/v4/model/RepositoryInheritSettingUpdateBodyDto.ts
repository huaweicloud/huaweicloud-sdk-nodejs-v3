

export class RepositoryInheritSettingUpdateBodyDto {
    public name?: RepositoryInheritSettingUpdateBodyDtoNameEnum | string;
    private 'inherit_mod'?: RepositoryInheritSettingUpdateBodyDtoInheritModEnum | string;
    public constructor() { 
    }
    public withName(name: RepositoryInheritSettingUpdateBodyDtoNameEnum | string): RepositoryInheritSettingUpdateBodyDto {
        this['name'] = name;
        return this;
    }
    public withInheritMod(inheritMod: RepositoryInheritSettingUpdateBodyDtoInheritModEnum | string): RepositoryInheritSettingUpdateBodyDto {
        this['inherit_mod'] = inheritMod;
        return this;
    }
    public set inheritMod(inheritMod: RepositoryInheritSettingUpdateBodyDtoInheritModEnum | string  | undefined) {
        this['inherit_mod'] = inheritMod;
    }
    public get inheritMod(): RepositoryInheritSettingUpdateBodyDtoInheritModEnum | string | undefined {
        return this['inherit_mod'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RepositoryInheritSettingUpdateBodyDtoNameEnum {
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
export enum RepositoryInheritSettingUpdateBodyDtoInheritModEnum {
    INHERIT = 'inherit',
    CUSTOM = 'custom'
}
