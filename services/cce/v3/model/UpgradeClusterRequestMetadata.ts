

export class UpgradeClusterRequestMetadata {
    public apiVersion: string;
    public kind: string;
    public constructor(apiVersion?: any, kind?: any) { 
        this['apiVersion'] = apiVersion;
        this['kind'] = kind;
    }
    public withApiVersion(apiVersion: string): UpgradeClusterRequestMetadata {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): UpgradeClusterRequestMetadata {
        this['kind'] = kind;
        return this;
    }
}