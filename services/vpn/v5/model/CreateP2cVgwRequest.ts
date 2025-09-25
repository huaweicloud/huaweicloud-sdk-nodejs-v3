import { CreateP2cVgwRequestBody } from './CreateP2cVgwRequestBody';


export class CreateP2cVgwRequest {
    private 'X-Client-Token'?: string;
    public body?: CreateP2cVgwRequestBody;
    public constructor() { 
    }
    public withXClientToken(xClientToken: string): CreateP2cVgwRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withBody(body: CreateP2cVgwRequestBody): CreateP2cVgwRequest {
        this['body'] = body;
        return this;
    }
}