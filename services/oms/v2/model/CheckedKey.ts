

export class CheckedKey {
    public key?: string;
    private 'is_etag_matching'?: boolean;
    private 'is_object_existing'?: boolean;
    public constructor() { 
    }
    public withKey(key: string): CheckedKey {
        this['key'] = key;
        return this;
    }
    public withIsEtagMatching(isEtagMatching: boolean): CheckedKey {
        this['is_etag_matching'] = isEtagMatching;
        return this;
    }
    public set isEtagMatching(isEtagMatching: boolean  | undefined) {
        this['is_etag_matching'] = isEtagMatching;
    }
    public get isEtagMatching(): boolean | undefined {
        return this['is_etag_matching'];
    }
    public withIsObjectExisting(isObjectExisting: boolean): CheckedKey {
        this['is_object_existing'] = isObjectExisting;
        return this;
    }
    public set isObjectExisting(isObjectExisting: boolean  | undefined) {
        this['is_object_existing'] = isObjectExisting;
    }
    public get isObjectExisting(): boolean | undefined {
        return this['is_object_existing'];
    }
}