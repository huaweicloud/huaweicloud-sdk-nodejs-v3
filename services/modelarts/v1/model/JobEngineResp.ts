

export class JobEngineResp {
    private 'engine_id'?: string;
    private 'engine_name'?: string;
    private 'engine_version'?: string;
    private 'image_url'?: string;
    private 'install_sys_packages'?: boolean;
    public constructor() { 
    }
    public withEngineId(engineId: string): JobEngineResp {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withEngineName(engineName: string): JobEngineResp {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withEngineVersion(engineVersion: string): JobEngineResp {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
    public withImageUrl(imageUrl: string): JobEngineResp {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withInstallSysPackages(installSysPackages: boolean): JobEngineResp {
        this['install_sys_packages'] = installSysPackages;
        return this;
    }
    public set installSysPackages(installSysPackages: boolean  | undefined) {
        this['install_sys_packages'] = installSysPackages;
    }
    public get installSysPackages(): boolean | undefined {
        return this['install_sys_packages'];
    }
}