import { CreateServersRequestBody } from './CreateServersRequestBody';


export class CreateServersRequest {
    private 'X-Client-Token'?: string | undefined;
    public body?: CreateServersRequestBody;
    public constructor() { 
    }
    public withXClientToken(xClientToken: string): CreateServersRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken() {
        return this['X-Client-Token'];
    }
    public withBody(body: CreateServersRequestBody): CreateServersRequest {
        this['body'] = body;
        return this;
    }
}