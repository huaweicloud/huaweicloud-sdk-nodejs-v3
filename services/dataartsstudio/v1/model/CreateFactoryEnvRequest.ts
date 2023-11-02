import { EnvRequestBody } from './EnvRequestBody';


export class CreateFactoryEnvRequest {
    public workspace?: string;
    private 'Content-Type'?: string;
    public body?: EnvRequestBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withWorkspace(workspace: string): CreateFactoryEnvRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withContentType(contentType: string): CreateFactoryEnvRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: EnvRequestBody): CreateFactoryEnvRequest {
        this['body'] = body;
        return this;
    }
}