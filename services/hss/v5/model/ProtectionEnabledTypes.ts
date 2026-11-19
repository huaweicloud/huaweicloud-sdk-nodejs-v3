

export class ProtectionEnabledTypes {
    private 'protect_type'?: string;
    public constructor() { 
    }
    public withProtectType(protectType: string): ProtectionEnabledTypes {
        this['protect_type'] = protectType;
        return this;
    }
    public set protectType(protectType: string  | undefined) {
        this['protect_type'] = protectType;
    }
    public get protectType(): string | undefined {
        return this['protect_type'];
    }
}