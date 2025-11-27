

export class DeleteProxyUnitedWorkloadRequest {
    public clustergroupid?: string;
    public kind?: string;
    public namespace?: string;
    public name?: string;
    public constructor(clustergroupid?: string, kind?: string) { 
        this['clustergroupid'] = clustergroupid;
        this['kind'] = kind;
    }
    public withClustergroupid(clustergroupid: string): DeleteProxyUnitedWorkloadRequest {
        this['clustergroupid'] = clustergroupid;
        return this;
    }
    public withKind(kind: string): DeleteProxyUnitedWorkloadRequest {
        this['kind'] = kind;
        return this;
    }
    public withNamespace(namespace: string): DeleteProxyUnitedWorkloadRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withName(name: string): DeleteProxyUnitedWorkloadRequest {
        this['name'] = name;
        return this;
    }
}