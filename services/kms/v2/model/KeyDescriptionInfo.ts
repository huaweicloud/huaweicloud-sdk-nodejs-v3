

export class KeyDescriptionInfo {
    private 'key_id'?: string | undefined;
    private 'key_description'?: string | undefined;
    public constructor() { 
    }
    public withKeyId(keyId: string): KeyDescriptionInfo {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withKeyDescription(keyDescription: string): KeyDescriptionInfo {
        this['key_description'] = keyDescription;
        return this;
    }
    public set keyDescription(keyDescription: string | undefined) {
        this['key_description'] = keyDescription;
    }
    public get keyDescription() {
        return this['key_description'];
    }
}