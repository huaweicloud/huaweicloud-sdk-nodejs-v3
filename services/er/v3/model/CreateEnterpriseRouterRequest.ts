import { CreateEnterpriseRouterRequestBody } from './CreateEnterpriseRouterRequestBody';


export class CreateEnterpriseRouterRequest {
    private 'X-Client-Token'?: string | undefined;
    public body?: CreateEnterpriseRouterRequestBody;
    public constructor() { 
    }
    public withXClientToken(xClientToken: string): CreateEnterpriseRouterRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken() {
        return this['X-Client-Token'];
    }
    public withBody(body: CreateEnterpriseRouterRequestBody): CreateEnterpriseRouterRequest {
        this['body'] = body;
        return this;
    }
}