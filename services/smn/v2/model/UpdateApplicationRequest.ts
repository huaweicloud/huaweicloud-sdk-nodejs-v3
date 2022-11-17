import { UpdateApplicationRequestBody } from './UpdateApplicationRequestBody';


export class UpdateApplicationRequest {
    private 'application_urn': string | undefined;
    public body?: UpdateApplicationRequestBody;
    public constructor(applicationUrn?: any) { 
        this['application_urn'] = applicationUrn;
    }
    public withApplicationUrn(applicationUrn: string): UpdateApplicationRequest {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn() {
        return this['application_urn'];
    }
    public withBody(body: UpdateApplicationRequestBody): UpdateApplicationRequest {
        this['body'] = body;
        return this;
    }
}