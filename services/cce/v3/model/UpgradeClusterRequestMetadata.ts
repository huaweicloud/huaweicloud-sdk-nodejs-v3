

export class UpgradeClusterRequestMetadata {
    public apiVersion?: string;
    public kind?: string;
    public constructor(apiVersion?: string, kind?: string) { 
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