

export class DeleteAppRequest {
    private 'app_id'?: string;
    private 'reserve_obs_file'?: string;
    public constructor(appId?: string) { 
        this['app_id'] = appId;
    }
    public withAppId(appId: string): DeleteAppRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withReserveObsFile(reserveObsFile: string): DeleteAppRequest {
        this['reserve_obs_file'] = reserveObsFile;
        return this;
    }
    public set reserveObsFile(reserveObsFile: string  | undefined) {
        this['reserve_obs_file'] = reserveObsFile;
    }
    public get reserveObsFile(): string | undefined {
        return this['reserve_obs_file'];
    }
}