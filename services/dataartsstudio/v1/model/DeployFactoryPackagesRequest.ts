import { DeployFactoryPackagesRequestBody } from './DeployFactoryPackagesRequestBody';


export class DeployFactoryPackagesRequest {
    public workspace?: string;
    private 'Content-Type'?: string;
    public body?: DeployFactoryPackagesRequestBody;
    public constructor() { 
    }
    public withWorkspace(workspace: string): DeployFactoryPackagesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withContentType(contentType: string): DeployFactoryPackagesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: DeployFactoryPackagesRequestBody): DeployFactoryPackagesRequest {
        this['body'] = body;
        return this;
    }
}