

export class UpmOptions {
    private 'user_profile_rule'?: string;
    private 'redir_exclude_common_folders'?: string;
    private 'redir_exclude_copy0s'?: string;
    private 'redir_exclude_copy1s'?: string;
    private 'redir_exclude_copy2s'?: string;
    private 'redir_exclude_copy3s'?: string;
    private 'redir_exclude_includes'?: string;
    public constructor() { 
    }
    public withUserProfileRule(userProfileRule: string): UpmOptions {
        this['user_profile_rule'] = userProfileRule;
        return this;
    }
    public set userProfileRule(userProfileRule: string  | undefined) {
        this['user_profile_rule'] = userProfileRule;
    }
    public get userProfileRule(): string | undefined {
        return this['user_profile_rule'];
    }
    public withRedirExcludeCommonFolders(redirExcludeCommonFolders: string): UpmOptions {
        this['redir_exclude_common_folders'] = redirExcludeCommonFolders;
        return this;
    }
    public set redirExcludeCommonFolders(redirExcludeCommonFolders: string  | undefined) {
        this['redir_exclude_common_folders'] = redirExcludeCommonFolders;
    }
    public get redirExcludeCommonFolders(): string | undefined {
        return this['redir_exclude_common_folders'];
    }
    public withRedirExcludeCopy0s(redirExcludeCopy0s: string): UpmOptions {
        this['redir_exclude_copy0s'] = redirExcludeCopy0s;
        return this;
    }
    public set redirExcludeCopy0s(redirExcludeCopy0s: string  | undefined) {
        this['redir_exclude_copy0s'] = redirExcludeCopy0s;
    }
    public get redirExcludeCopy0s(): string | undefined {
        return this['redir_exclude_copy0s'];
    }
    public withRedirExcludeCopy1s(redirExcludeCopy1s: string): UpmOptions {
        this['redir_exclude_copy1s'] = redirExcludeCopy1s;
        return this;
    }
    public set redirExcludeCopy1s(redirExcludeCopy1s: string  | undefined) {
        this['redir_exclude_copy1s'] = redirExcludeCopy1s;
    }
    public get redirExcludeCopy1s(): string | undefined {
        return this['redir_exclude_copy1s'];
    }
    public withRedirExcludeCopy2s(redirExcludeCopy2s: string): UpmOptions {
        this['redir_exclude_copy2s'] = redirExcludeCopy2s;
        return this;
    }
    public set redirExcludeCopy2s(redirExcludeCopy2s: string  | undefined) {
        this['redir_exclude_copy2s'] = redirExcludeCopy2s;
    }
    public get redirExcludeCopy2s(): string | undefined {
        return this['redir_exclude_copy2s'];
    }
    public withRedirExcludeCopy3s(redirExcludeCopy3s: string): UpmOptions {
        this['redir_exclude_copy3s'] = redirExcludeCopy3s;
        return this;
    }
    public set redirExcludeCopy3s(redirExcludeCopy3s: string  | undefined) {
        this['redir_exclude_copy3s'] = redirExcludeCopy3s;
    }
    public get redirExcludeCopy3s(): string | undefined {
        return this['redir_exclude_copy3s'];
    }
    public withRedirExcludeIncludes(redirExcludeIncludes: string): UpmOptions {
        this['redir_exclude_includes'] = redirExcludeIncludes;
        return this;
    }
    public set redirExcludeIncludes(redirExcludeIncludes: string  | undefined) {
        this['redir_exclude_includes'] = redirExcludeIncludes;
    }
    public get redirExcludeIncludes(): string | undefined {
        return this['redir_exclude_includes'];
    }
}