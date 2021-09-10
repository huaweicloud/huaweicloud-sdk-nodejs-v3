

export class NodeLifecycleConfig {
    public preInstall?: string;
    public postInstall?: string;
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
}