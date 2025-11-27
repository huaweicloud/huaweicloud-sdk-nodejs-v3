

export class ReleaseParams {
    private 'dry_run'?: boolean;
    public replace?: boolean;
    public recreate?: boolean;
    private 'no_hooks'?: boolean;
    private 'reset_values'?: boolean;
    private 'name_template'?: string;
    private 'release_version'?: number;
    private 'include_hooks'?: boolean;
    public constructor() { 
    }
    public withDryRun(dryRun: boolean): ReleaseParams {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withReplace(replace: boolean): ReleaseParams {
        this['replace'] = replace;
        return this;
    }
    public withRecreate(recreate: boolean): ReleaseParams {
        this['recreate'] = recreate;
        return this;
    }
    public withNoHooks(noHooks: boolean): ReleaseParams {
        this['no_hooks'] = noHooks;
        return this;
    }
    public set noHooks(noHooks: boolean  | undefined) {
        this['no_hooks'] = noHooks;
    }
    public get noHooks(): boolean | undefined {
        return this['no_hooks'];
    }
    public withResetValues(resetValues: boolean): ReleaseParams {
        this['reset_values'] = resetValues;
        return this;
    }
    public set resetValues(resetValues: boolean  | undefined) {
        this['reset_values'] = resetValues;
    }
    public get resetValues(): boolean | undefined {
        return this['reset_values'];
    }
    public withNameTemplate(nameTemplate: string): ReleaseParams {
        this['name_template'] = nameTemplate;
        return this;
    }
    public set nameTemplate(nameTemplate: string  | undefined) {
        this['name_template'] = nameTemplate;
    }
    public get nameTemplate(): string | undefined {
        return this['name_template'];
    }
    public withReleaseVersion(releaseVersion: number): ReleaseParams {
        this['release_version'] = releaseVersion;
        return this;
    }
    public set releaseVersion(releaseVersion: number  | undefined) {
        this['release_version'] = releaseVersion;
    }
    public get releaseVersion(): number | undefined {
        return this['release_version'];
    }
    public withIncludeHooks(includeHooks: boolean): ReleaseParams {
        this['include_hooks'] = includeHooks;
        return this;
    }
    public set includeHooks(includeHooks: boolean  | undefined) {
        this['include_hooks'] = includeHooks;
    }
    public get includeHooks(): boolean | undefined {
        return this['include_hooks'];
    }
}