import { CreateWorkspaceRequestBody } from './CreateWorkspaceRequestBody';


export class CreateWorkspaceRequest {
    private 'content-type'?: string;
    public body?: CreateWorkspaceRequestBody;
    public constructor(contentType?: string) { 
        this['content-type'] = contentType;
    }
    public withContentType(contentType: string): CreateWorkspaceRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withBody(body: CreateWorkspaceRequestBody): CreateWorkspaceRequest {
        this['body'] = body;
        return this;
    }
}