

export class IAMAgency {
    private 'trust_policy'?: string;
    public constructor(trustPolicy?: string) { 
        this['trust_policy'] = trustPolicy;
    }
    public withTrustPolicy(trustPolicy: string): IAMAgency {
        this['trust_policy'] = trustPolicy;
        return this;
    }
    public set trustPolicy(trustPolicy: string  | undefined) {
        this['trust_policy'] = trustPolicy;
    }
    public get trustPolicy(): string | undefined {
        return this['trust_policy'];
    }
}