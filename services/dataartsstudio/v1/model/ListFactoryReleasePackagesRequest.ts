import { ListReleasePackagesRequestBody } from './ListReleasePackagesRequestBody';


export class ListFactoryReleasePackagesRequest {
    public workspace?: string;
    private 'Content-Type'?: string;
    public body?: ListReleasePackagesRequestBody;
    public constructor() { 
    }
    public withWorkspace(workspace: string): ListFactoryReleasePackagesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withContentType(contentType: string): ListFactoryReleasePackagesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: ListReleasePackagesRequestBody): ListFactoryReleasePackagesRequest {
        this['body'] = body;
        return this;
    }
}