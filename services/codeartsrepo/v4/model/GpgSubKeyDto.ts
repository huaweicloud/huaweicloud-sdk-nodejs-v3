

export class GpgSubKeyDto {
    public id?: number;
    public fingerprint?: string;
    private 'gpg_key_id'?: number;
    public keyid?: string;
    public constructor() { 
    }
    public withId(id: number): GpgSubKeyDto {
        this['id'] = id;
        return this;
    }
    public withFingerprint(fingerprint: string): GpgSubKeyDto {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withGpgKeyId(gpgKeyId: number): GpgSubKeyDto {
        this['gpg_key_id'] = gpgKeyId;
        return this;
    }
    public set gpgKeyId(gpgKeyId: number  | undefined) {
        this['gpg_key_id'] = gpgKeyId;
    }
    public get gpgKeyId(): number | undefined {
        return this['gpg_key_id'];
    }
    public withKeyid(keyid: string): GpgSubKeyDto {
        this['keyid'] = keyid;
        return this;
    }
}