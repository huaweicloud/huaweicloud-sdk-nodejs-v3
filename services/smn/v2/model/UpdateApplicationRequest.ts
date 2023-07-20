import { UpdateApplicationRequestBody } from './UpdateApplicationRequestBody';


export class UpdateApplicationRequest {
    private 'application_urn'?: string;
    public body?: UpdateApplicationRequestBody;
    public constructor(applicationUrn?: string) { 
        this['application_urn'] = applicationUrn;
    }
    public withApplicationUrn(applicationUrn: string): UpdateApplicationRequest {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string  | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn(): string | undefined {
        return this['application_urn'];
    }
    public withBody(body: UpdateApplicationRequestBody): UpdateApplicationRequest {
        this['body'] = body;
        return this;
    }
}