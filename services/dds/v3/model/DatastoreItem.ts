

export class DatastoreItem {
    public type?: string;
    public version?: string;
    private 'patch_available'?: boolean;
    public constructor(type?: string, version?: string, patchAvailable?: boolean) { 
        this['type'] = type;
        this['version'] = version;
        this['patch_available'] = patchAvailable;
    }
    public withType(type: string): DatastoreItem {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): DatastoreItem {
        this['version'] = version;
        return this;
    }
    public withPatchAvailable(patchAvailable: boolean): DatastoreItem {
        this['patch_available'] = patchAvailable;
        return this;
    }
    public set patchAvailable(patchAvailable: boolean  | undefined) {
        this['patch_available'] = patchAvailable;
    }
    public get patchAvailable(): boolean | undefined {
        return this['patch_available'];
    }
}