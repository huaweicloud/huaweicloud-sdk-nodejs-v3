

export class ListApplicationAttributesRequest {
    private 'application_urn': string | undefined;
    public constructor(applicationUrn?: any) { 
        this['application_urn'] = applicationUrn;
    }
    public withApplicationUrn(applicationUrn: string): ListApplicationAttributesRequest {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn() {
        return this['application_urn'];
    }
}