import { CancelFactoryPackagesRequestBody } from './CancelFactoryPackagesRequestBody';


export class CancelFactoryPackagesRequest {
    public workspace?: string;
    private 'Content-Type'?: string;
    public body?: CancelFactoryPackagesRequestBody;
    public constructor() { 
    }
    public withWorkspace(workspace: string): CancelFactoryPackagesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withContentType(contentType: string): CancelFactoryPackagesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CancelFactoryPackagesRequestBody): CancelFactoryPackagesRequest {
        this['body'] = body;
        return this;
    }
}