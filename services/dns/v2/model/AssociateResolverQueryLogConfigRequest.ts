import { AssociateResolverQueryLogConfigRequestBody } from './AssociateResolverQueryLogConfigRequestBody';


export class AssociateResolverQueryLogConfigRequest {
    public id?: string;
    public body?: AssociateResolverQueryLogConfigRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): AssociateResolverQueryLogConfigRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: AssociateResolverQueryLogConfigRequestBody): AssociateResolverQueryLogConfigRequest {
        this['body'] = body;
        return this;
    }
}