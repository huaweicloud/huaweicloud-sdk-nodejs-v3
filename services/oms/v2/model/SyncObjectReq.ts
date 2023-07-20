

export class SyncObjectReq {
    private 'object_keys'?: Array<string>;
    public constructor(objectKeys?: Array<string>) { 
        this['object_keys'] = objectKeys;
    }
    public withObjectKeys(objectKeys: Array<string>): SyncObjectReq {
        this['object_keys'] = objectKeys;
        return this;
    }
    public set objectKeys(objectKeys: Array<string>  | undefined) {
        this['object_keys'] = objectKeys;
    }
    public get objectKeys(): Array<string> | undefined {
        return this['object_keys'];
    }
}