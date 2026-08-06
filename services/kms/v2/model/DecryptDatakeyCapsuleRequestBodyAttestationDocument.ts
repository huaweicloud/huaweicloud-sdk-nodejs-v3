

export class DecryptDatakeyCapsuleRequestBodyAttestationDocument {
    private 'ecs_signature'?: string;
    private 'custom_signature'?: string;
    private 'custom_public_key'?: string;
    private 'expire_time'?: string;
    private 'service_token'?: string;
    public constructor() { 
    }
    public withEcsSignature(ecsSignature: string): DecryptDatakeyCapsuleRequestBodyAttestationDocument {
        this['ecs_signature'] = ecsSignature;
        return this;
    }
    public set ecsSignature(ecsSignature: string  | undefined) {
        this['ecs_signature'] = ecsSignature;
    }
    public get ecsSignature(): string | undefined {
        return this['ecs_signature'];
    }
    public withCustomSignature(customSignature: string): DecryptDatakeyCapsuleRequestBodyAttestationDocument {
        this['custom_signature'] = customSignature;
        return this;
    }
    public set customSignature(customSignature: string  | undefined) {
        this['custom_signature'] = customSignature;
    }
    public get customSignature(): string | undefined {
        return this['custom_signature'];
    }
    public withCustomPublicKey(customPublicKey: string): DecryptDatakeyCapsuleRequestBodyAttestationDocument {
        this['custom_public_key'] = customPublicKey;
        return this;
    }
    public set customPublicKey(customPublicKey: string  | undefined) {
        this['custom_public_key'] = customPublicKey;
    }
    public get customPublicKey(): string | undefined {
        return this['custom_public_key'];
    }
    public withExpireTime(expireTime: string): DecryptDatakeyCapsuleRequestBodyAttestationDocument {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: string  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): string | undefined {
        return this['expire_time'];
    }
    public withServiceToken(serviceToken: string): DecryptDatakeyCapsuleRequestBodyAttestationDocument {
        this['service_token'] = serviceToken;
        return this;
    }
    public set serviceToken(serviceToken: string  | undefined) {
        this['service_token'] = serviceToken;
    }
    public get serviceToken(): string | undefined {
        return this['service_token'];
    }
}