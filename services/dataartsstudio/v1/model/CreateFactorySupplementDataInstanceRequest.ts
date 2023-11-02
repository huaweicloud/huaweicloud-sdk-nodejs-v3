import { CreateFactorySupplementDataInstanceRequestBody } from './CreateFactorySupplementDataInstanceRequestBody';


export class CreateFactorySupplementDataInstanceRequest {
    public workspace?: string;
    private 'Content-Type'?: string;
    public body?: CreateFactorySupplementDataInstanceRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): CreateFactorySupplementDataInstanceRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withContentType(contentType: string): CreateFactorySupplementDataInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateFactorySupplementDataInstanceRequestBody): CreateFactorySupplementDataInstanceRequest {
        this['body'] = body;
        return this;
    }
}