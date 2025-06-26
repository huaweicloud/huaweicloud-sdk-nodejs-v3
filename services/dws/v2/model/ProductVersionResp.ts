

export class ProductVersionResp {
    private 'min_cn'?: number;
    private 'max_cn'?: number;
    private 'version_type'?: string;
    private 'datastore_version'?: string;
    public constructor() { 
    }
    public withMinCn(minCn: number): ProductVersionResp {
        this['min_cn'] = minCn;
        return this;
    }
    public set minCn(minCn: number  | undefined) {
        this['min_cn'] = minCn;
    }
    public get minCn(): number | undefined {
        return this['min_cn'];
    }
    public withMaxCn(maxCn: number): ProductVersionResp {
        this['max_cn'] = maxCn;
        return this;
    }
    public set maxCn(maxCn: number  | undefined) {
        this['max_cn'] = maxCn;
    }
    public get maxCn(): number | undefined {
        return this['max_cn'];
    }
    public withVersionType(versionType: string): ProductVersionResp {
        this['version_type'] = versionType;
        return this;
    }
    public set versionType(versionType: string  | undefined) {
        this['version_type'] = versionType;
    }
    public get versionType(): string | undefined {
        return this['version_type'];
    }
    public withDatastoreVersion(datastoreVersion: string): ProductVersionResp {
        this['datastore_version'] = datastoreVersion;
        return this;
    }
    public set datastoreVersion(datastoreVersion: string  | undefined) {
        this['datastore_version'] = datastoreVersion;
    }
    public get datastoreVersion(): string | undefined {
        return this['datastore_version'];
    }
}