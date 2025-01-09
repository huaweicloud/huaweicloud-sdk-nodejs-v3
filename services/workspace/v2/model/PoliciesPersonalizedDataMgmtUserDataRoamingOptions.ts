

export class PoliciesPersonalizedDataMgmtUserDataRoamingOptions {
    private 'profile_streaming_enable'?: boolean;
    private 'roamed_files_local_path'?: string;
    private 'exclude_folders_path'?: string;
    private 'roaming_registry_method'?: string;
    private 'roaming_registry_path'?: string;
    public constructor() { 
    }
    public withProfileStreamingEnable(profileStreamingEnable: boolean): PoliciesPersonalizedDataMgmtUserDataRoamingOptions {
        this['profile_streaming_enable'] = profileStreamingEnable;
        return this;
    }
    public set profileStreamingEnable(profileStreamingEnable: boolean  | undefined) {
        this['profile_streaming_enable'] = profileStreamingEnable;
    }
    public get profileStreamingEnable(): boolean | undefined {
        return this['profile_streaming_enable'];
    }
    public withRoamedFilesLocalPath(roamedFilesLocalPath: string): PoliciesPersonalizedDataMgmtUserDataRoamingOptions {
        this['roamed_files_local_path'] = roamedFilesLocalPath;
        return this;
    }
    public set roamedFilesLocalPath(roamedFilesLocalPath: string  | undefined) {
        this['roamed_files_local_path'] = roamedFilesLocalPath;
    }
    public get roamedFilesLocalPath(): string | undefined {
        return this['roamed_files_local_path'];
    }
    public withExcludeFoldersPath(excludeFoldersPath: string): PoliciesPersonalizedDataMgmtUserDataRoamingOptions {
        this['exclude_folders_path'] = excludeFoldersPath;
        return this;
    }
    public set excludeFoldersPath(excludeFoldersPath: string  | undefined) {
        this['exclude_folders_path'] = excludeFoldersPath;
    }
    public get excludeFoldersPath(): string | undefined {
        return this['exclude_folders_path'];
    }
    public withRoamingRegistryMethod(roamingRegistryMethod: string): PoliciesPersonalizedDataMgmtUserDataRoamingOptions {
        this['roaming_registry_method'] = roamingRegistryMethod;
        return this;
    }
    public set roamingRegistryMethod(roamingRegistryMethod: string  | undefined) {
        this['roaming_registry_method'] = roamingRegistryMethod;
    }
    public get roamingRegistryMethod(): string | undefined {
        return this['roaming_registry_method'];
    }
    public withRoamingRegistryPath(roamingRegistryPath: string): PoliciesPersonalizedDataMgmtUserDataRoamingOptions {
        this['roaming_registry_path'] = roamingRegistryPath;
        return this;
    }
    public set roamingRegistryPath(roamingRegistryPath: string  | undefined) {
        this['roaming_registry_path'] = roamingRegistryPath;
    }
    public get roamingRegistryPath(): string | undefined {
        return this['roaming_registry_path'];
    }
}