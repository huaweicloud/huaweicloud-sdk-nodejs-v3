

export class PutCustomPolicyToPermissionSetReqBody {
    private 'custom_policy'?: string;
    public constructor(customPolicy?: string) { 
        this['custom_policy'] = customPolicy;
    }
    public withCustomPolicy(customPolicy: string): PutCustomPolicyToPermissionSetReqBody {
        this['custom_policy'] = customPolicy;
        return this;
    }
    public set customPolicy(customPolicy: string  | undefined) {
        this['custom_policy'] = customPolicy;
    }
    public get customPolicy(): string | undefined {
        return this['custom_policy'];
    }
}