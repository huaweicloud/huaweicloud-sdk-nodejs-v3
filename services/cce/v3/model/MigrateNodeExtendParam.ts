

export class MigrateNodeExtendParam {
    public maxPods?: number;
    private 'DockerLVMConfigOverride'?: string | undefined;
    private 'alpha.cce/preInstall'?: string | undefined;
    private 'alpha.cce/postInstall'?: string | undefined;
    private 'alpha.cce/NodeImageID'?: string | undefined;
    public constructor() { 
    }
    public withMaxPods(maxPods: number): MigrateNodeExtendParam {
        this['maxPods'] = maxPods;
        return this;
    }
    public withDockerLVMConfigOverride(dockerLVMConfigOverride: string): MigrateNodeExtendParam {
        this['DockerLVMConfigOverride'] = dockerLVMConfigOverride;
        return this;
    }
    public set dockerLVMConfigOverride(dockerLVMConfigOverride: string | undefined) {
        this['DockerLVMConfigOverride'] = dockerLVMConfigOverride;
    }
    public get dockerLVMConfigOverride() {
        return this['DockerLVMConfigOverride'];
    }
    public withAlphaCcePreInstall(alphaCcePreInstall: string): MigrateNodeExtendParam {
        this['alpha.cce/preInstall'] = alphaCcePreInstall;
        return this;
    }
    public set alphaCcePreInstall(alphaCcePreInstall: string | undefined) {
        this['alpha.cce/preInstall'] = alphaCcePreInstall;
    }
    public get alphaCcePreInstall() {
        return this['alpha.cce/preInstall'];
    }
    public withAlphaCcePostInstall(alphaCcePostInstall: string): MigrateNodeExtendParam {
        this['alpha.cce/postInstall'] = alphaCcePostInstall;
        return this;
    }
    public set alphaCcePostInstall(alphaCcePostInstall: string | undefined) {
        this['alpha.cce/postInstall'] = alphaCcePostInstall;
    }
    public get alphaCcePostInstall() {
        return this['alpha.cce/postInstall'];
    }
    public withAlphaCceNodeImageID(alphaCceNodeImageID: string): MigrateNodeExtendParam {
        this['alpha.cce/NodeImageID'] = alphaCceNodeImageID;
        return this;
    }
    public set alphaCceNodeImageID(alphaCceNodeImageID: string | undefined) {
        this['alpha.cce/NodeImageID'] = alphaCceNodeImageID;
    }
    public get alphaCceNodeImageID() {
        return this['alpha.cce/NodeImageID'];
    }
}