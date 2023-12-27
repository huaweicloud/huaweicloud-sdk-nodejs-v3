import { HostBody } from './HostBody';


export class CreateAadDomainRequest {
    public body?: HostBody;
    public constructor() { 
    }
    public withBody(body: HostBody): CreateAadDomainRequest {
        this['body'] = body;
        return this;
    }
}