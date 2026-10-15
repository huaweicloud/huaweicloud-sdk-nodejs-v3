

export class ProvidedContextDto {
    private 'context_provider_urn'?: string;
    private 'context_assertion'?: string;
    public constructor(contextProviderUrn?: string, contextAssertion?: string) { 
        this['context_provider_urn'] = contextProviderUrn;
        this['context_assertion'] = contextAssertion;
    }
    public withContextProviderUrn(contextProviderUrn: string): ProvidedContextDto {
        this['context_provider_urn'] = contextProviderUrn;
        return this;
    }
    public set contextProviderUrn(contextProviderUrn: string  | undefined) {
        this['context_provider_urn'] = contextProviderUrn;
    }
    public get contextProviderUrn(): string | undefined {
        return this['context_provider_urn'];
    }
    public withContextAssertion(contextAssertion: string): ProvidedContextDto {
        this['context_assertion'] = contextAssertion;
        return this;
    }
    public set contextAssertion(contextAssertion: string  | undefined) {
        this['context_assertion'] = contextAssertion;
    }
    public get contextAssertion(): string | undefined {
        return this['context_assertion'];
    }
}