import { BizCatalogVO } from './BizCatalogVO';


export class ChangeCatalogRequest {
    public workspace?: string;
    public body?: BizCatalogVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ChangeCatalogRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BizCatalogVO): ChangeCatalogRequest {
        this['body'] = body;
        return this;
    }
}