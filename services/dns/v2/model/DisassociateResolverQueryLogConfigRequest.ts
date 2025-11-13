import { AssociateResolverQueryLogConfigRequestBody } from './AssociateResolverQueryLogConfigRequestBody';


export class DisassociateResolverQueryLogConfigRequest {
    public id?: string;
    public body?: AssociateResolverQueryLogConfigRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): DisassociateResolverQueryLogConfigRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: AssociateResolverQueryLogConfigRequestBody): DisassociateResolverQueryLogConfigRequest {
        this['body'] = body;
        return this;
    }
}