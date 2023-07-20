

export class ListApplicationAttributesRequest {
    private 'application_urn'?: string;
    public constructor(applicationUrn?: string) { 
        this['application_urn'] = applicationUrn;
    }
    public withApplicationUrn(applicationUrn: string): ListApplicationAttributesRequest {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string  | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn(): string | undefined {
        return this['application_urn'];
    }
}