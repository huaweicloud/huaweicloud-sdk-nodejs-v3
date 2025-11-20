import { HostBody } from './HostBody';


export class CreateDomainRequest {
    public body?: HostBody;
    public constructor() { 
    }
    public withBody(body: HostBody): CreateDomainRequest {
        this['body'] = body;
        return this;
    }
}