import { IdsParam } from './IdsParam';


export class DeleteCatalogRequest {
    public workspace?: string;
    public body?: IdsParam;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): DeleteCatalogRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: IdsParam): DeleteCatalogRequest {
        this['body'] = body;
        return this;
    }
}