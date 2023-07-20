import { CreatePostPaidServersRequestBody } from './CreatePostPaidServersRequestBody';


export class CreatePostPaidServersRequest {
    private 'X-Client-Token'?: string;
    public body?: CreatePostPaidServersRequestBody;
    public constructor() { 
    }
    public withXClientToken(xClientToken: string): CreatePostPaidServersRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withBody(body: CreatePostPaidServersRequestBody): CreatePostPaidServersRequest {
        this['body'] = body;
        return this;
    }
}