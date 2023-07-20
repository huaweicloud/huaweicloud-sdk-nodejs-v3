

export class ListInstancesDatastoreResult {
    public type?: string;
    public version?: string;
    private 'patch_available'?: boolean;
    private 'whole_version'?: string;
    public constructor(type?: string, version?: string, patchAvailable?: boolean, wholeVersion?: string) { 
        this['type'] = type;
        this['version'] = version;
        this['patch_available'] = patchAvailable;
        this['whole_version'] = wholeVersion;
    }
    public withType(type: string): ListInstancesDatastoreResult {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ListInstancesDatastoreResult {
        this['version'] = version;
        return this;
    }
    public withPatchAvailable(patchAvailable: boolean): ListInstancesDatastoreResult {
        this['patch_available'] = patchAvailable;
        return this;
    }
    public set patchAvailable(patchAvailable: boolean  | undefined) {
        this['patch_available'] = patchAvailable;
    }
    public get patchAvailable(): boolean | undefined {
        return this['patch_available'];
    }
    public withWholeVersion(wholeVersion: string): ListInstancesDatastoreResult {
        this['whole_version'] = wholeVersion;
        return this;
    }
    public set wholeVersion(wholeVersion: string  | undefined) {
        this['whole_version'] = wholeVersion;
    }
    public get wholeVersion(): string | undefined {
        return this['whole_version'];
    }
}