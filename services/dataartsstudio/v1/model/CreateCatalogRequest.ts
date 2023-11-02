import { BizCatalogVO } from './BizCatalogVO';


export class CreateCatalogRequest {
    public workspace?: string;
    public body?: BizCatalogVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateCatalogRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BizCatalogVO): CreateCatalogRequest {
        this['body'] = body;
        return this;
    }
}