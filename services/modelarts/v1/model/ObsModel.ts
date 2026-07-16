

export class ObsModel {
    private 'obs_path'?: string;
    private 'local_path'?: string;
    public constructor(obsPath?: string) { 
        this['obs_path'] = obsPath;
    }
    public withObsPath(obsPath: string): ObsModel {
        this['obs_path'] = obsPath;
        return this;
    }
    public set obsPath(obsPath: string  | undefined) {
        this['obs_path'] = obsPath;
    }
    public get obsPath(): string | undefined {
        return this['obs_path'];
    }
    public withLocalPath(localPath: string): ObsModel {
        this['local_path'] = localPath;
        return this;
    }
    public set localPath(localPath: string  | undefined) {
        this['local_path'] = localPath;
    }
    public get localPath(): string | undefined {
        return this['local_path'];
    }
}