import { DeleteDomainV2RequestBody } from './DeleteDomainV2RequestBody';


export class DeleteDomainRequest {
    public body?: DeleteDomainV2RequestBody;
    public constructor() { 
    }
    public withBody(body: DeleteDomainV2RequestBody): DeleteDomainRequest {
        this['body'] = body;
        return this;
    }
}