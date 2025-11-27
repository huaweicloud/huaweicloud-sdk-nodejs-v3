import { UrlAccessControlTaskRequestBody } from './UrlAccessControlTaskRequestBody';


export class CreateAccessControlTaskRequest {
    public action?: string;
    public body?: UrlAccessControlTaskRequestBody;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: string): CreateAccessControlTaskRequest {
        this['action'] = action;
        return this;
    }
    public withBody(body: UrlAccessControlTaskRequestBody): CreateAccessControlTaskRequest {
        this['body'] = body;
        return this;
    }
}