

export class UpdateSecretRequestBody {
    private 'kms_key_id'?: string;
    public description?: string;
    private 'auto_rotation'?: boolean;
    private 'rotation_period'?: string;
    private 'event_subscriptions'?: Array<string>;
    private 'rotation_func_urn'?: string;
    public constructor() { 
    }
    public withKmsKeyId(kmsKeyId: string): UpdateSecretRequestBody {
        this['kms_key_id'] = kmsKeyId;
        return this;
    }
    public set kmsKeyId(kmsKeyId: string  | undefined) {
        this['kms_key_id'] = kmsKeyId;
    }
    public get kmsKeyId(): string | undefined {
        return this['kms_key_id'];
    }
    public withDescription(description: string): UpdateSecretRequestBody {
        this['description'] = description;
        return this;
    }
    public withAutoRotation(autoRotation: boolean): UpdateSecretRequestBody {
        this['auto_rotation'] = autoRotation;
        return this;
    }
    public set autoRotation(autoRotation: boolean  | undefined) {
        this['auto_rotation'] = autoRotation;
    }
    public get autoRotation(): boolean | undefined {
        return this['auto_rotation'];
    }
    public withRotationPeriod(rotationPeriod: string): UpdateSecretRequestBody {
        this['rotation_period'] = rotationPeriod;
        return this;
    }
    public set rotationPeriod(rotationPeriod: string  | undefined) {
        this['rotation_period'] = rotationPeriod;
    }
    public get rotationPeriod(): string | undefined {
        return this['rotation_period'];
    }
    public withEventSubscriptions(eventSubscriptions: Array<string>): UpdateSecretRequestBody {
        this['event_subscriptions'] = eventSubscriptions;
        return this;
    }
    public set eventSubscriptions(eventSubscriptions: Array<string>  | undefined) {
        this['event_subscriptions'] = eventSubscriptions;
    }
    public get eventSubscriptions(): Array<string> | undefined {
        return this['event_subscriptions'];
    }
    public withRotationFuncUrn(rotationFuncUrn: string): UpdateSecretRequestBody {
        this['rotation_func_urn'] = rotationFuncUrn;
        return this;
    }
    public set rotationFuncUrn(rotationFuncUrn: string  | undefined) {
        this['rotation_func_urn'] = rotationFuncUrn;
    }
    public get rotationFuncUrn(): string | undefined {
        return this['rotation_func_urn'];
    }
}