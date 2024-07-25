

export class NodeTemplateLifeCycle {
    public preInstall?: string;
    public postInstall?: string;
    public constructor() { 
    }
    public withPreInstall(preInstall: string): NodeTemplateLifeCycle {
        this['preInstall'] = preInstall;
        return this;
    }
    public withPostInstall(postInstall: string): NodeTemplateLifeCycle {
        this['postInstall'] = postInstall;
        return this;
    }
}