

export class NodeLifecycleConfig {
    public preInstall?: string;
    public postInstall?: string;
    public waitPostInstallFinish?: boolean;
    public constructor() { 
    }
    public withPreInstall(preInstall: string): NodeLifecycleConfig {
        this['preInstall'] = preInstall;
        return this;
    }
    public withPostInstall(postInstall: string): NodeLifecycleConfig {
        this['postInstall'] = postInstall;
        return this;
    }
    public withWaitPostInstallFinish(waitPostInstallFinish: boolean): NodeLifecycleConfig {
        this['waitPostInstallFinish'] = waitPostInstallFinish;
        return this;
    }
}