

export class InPlaceMigrateNodeExtendParam {
    private 'alpha.cce/preInstall'?: string;
    private 'alpha.cce/postInstall'?: string;
    public waitPostInstallFinish?: boolean;
    public constructor() { 
    }
    public withAlphaCcePreInstall(alphaCcePreInstall: string): InPlaceMigrateNodeExtendParam {
        this['alpha.cce/preInstall'] = alphaCcePreInstall;
        return this;
    }
    public set alphaCcePreInstall(alphaCcePreInstall: string  | undefined) {
        this['alpha.cce/preInstall'] = alphaCcePreInstall;
    }
    public get alphaCcePreInstall(): string | undefined {
        return this['alpha.cce/preInstall'];
    }
    public withAlphaCcePostInstall(alphaCcePostInstall: string): InPlaceMigrateNodeExtendParam {
        this['alpha.cce/postInstall'] = alphaCcePostInstall;
        return this;
    }
    public set alphaCcePostInstall(alphaCcePostInstall: string  | undefined) {
        this['alpha.cce/postInstall'] = alphaCcePostInstall;
    }
    public get alphaCcePostInstall(): string | undefined {
        return this['alpha.cce/postInstall'];
    }
    public withWaitPostInstallFinish(waitPostInstallFinish: boolean): InPlaceMigrateNodeExtendParam {
        this['waitPostInstallFinish'] = waitPostInstallFinish;
        return this;
    }
}