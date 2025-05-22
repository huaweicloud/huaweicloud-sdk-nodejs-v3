import { CreateFactoryPendingItemsPackageBody } from './CreateFactoryPendingItemsPackageBody';


export class CreateFactoryPendingItemsPackageRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public body?: CreateFactoryPendingItemsPackageBody;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateFactoryPendingItemsPackageRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): CreateFactoryPendingItemsPackageRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): CreateFactoryPendingItemsPackageRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateFactoryPendingItemsPackageBody): CreateFactoryPendingItemsPackageRequest {
        this['body'] = body;
        return this;
    }
}