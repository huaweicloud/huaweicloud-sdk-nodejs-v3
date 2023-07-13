

export class UpdateKeyRotationIntervalRequestBody {
    private 'key_id': string | undefined;
    private 'rotation_interval': number | undefined;
    public sequence?: string;
    public constructor(keyId?: any, rotationInterval?: any) { 
        this['key_id'] = keyId;
        this['rotation_interval'] = rotationInterval;
    }
    public withKeyId(keyId: string): UpdateKeyRotationIntervalRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withRotationInterval(rotationInterval: number): UpdateKeyRotationIntervalRequestBody {
        this['rotation_interval'] = rotationInterval;
        return this;
    }
    public set rotationInterval(rotationInterval: number | undefined) {
        this['rotation_interval'] = rotationInterval;
    }
    public get rotationInterval() {
        return this['rotation_interval'];
    }
    public withSequence(sequence: string): UpdateKeyRotationIntervalRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}