import { ExportTenantRepositoryBody } from './ExportTenantRepositoryBody';


export class ExportTenantRepositoriesRequest {
    public body?: ExportTenantRepositoryBody;
    public constructor() { 
    }
    public withBody(body: ExportTenantRepositoryBody): ExportTenantRepositoriesRequest {
        this['body'] = body;
        return this;
    }
}