

export class ShowProxyUnitedWorkloadRequest {
    public clustergroupid?: string;
    public kind?: string;
    public namespace?: string;
    public name?: string;
    public constructor(clustergroupid?: string, kind?: string) { 
        this['clustergroupid'] = clustergroupid;
        this['kind'] = kind;
    }
    public withClustergroupid(clustergroupid: string): ShowProxyUnitedWorkloadRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withKind(kind: string): ShowProxyUnitedWorkloadRequest {
        this['kind'] = kind;
        return this;
    }
    public withNamespace(namespace: string): ShowProxyUnitedWorkloadRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withName(name: string): ShowProxyUnitedWorkloadRequest {
        this['name'] = name;
        return this;
    }
}