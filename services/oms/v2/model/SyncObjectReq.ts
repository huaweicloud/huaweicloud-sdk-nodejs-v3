

export class SyncObjectReq {
    private 'object_keys': Array<string> | undefined;
    public constructor(objectKeys?: any) { 
        this['object_keys'] = objectKeys;
    }
    public withObjectKeys(objectKeys: Array<string>): SyncObjectReq {
        this['object_keys'] = objectKeys;
        return this;
    }
    public set objectKeys(objectKeys: Array<string> | undefined) {
        this['object_keys'] = objectKeys;
    }
    public get objectKeys() {
        return this['object_keys'];
    }
}