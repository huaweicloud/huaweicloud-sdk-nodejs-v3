import { CatalogInfo } from './CatalogInfo';


export class AddTagToAssetRequest {
    public workspace?: string;
    private 'term_guid'?: string;
    public body?: CatalogInfo;
    public constructor(workspace?: string, termGuid?: string) { 
        this['workspace'] = workspace;
        this['term_guid'] = termGuid;
    }
    public withWorkspace(workspace: string): AddTagToAssetRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withTermGuid(termGuid: string): AddTagToAssetRequest {
        this['term_guid'] = termGuid;
        return this;
    }
    public set termGuid(termGuid: string  | undefined) {
        this['term_guid'] = termGuid;
    }
    public get termGuid(): string | undefined {
        return this['term_guid'];
    }
    public withBody(body: CatalogInfo): AddTagToAssetRequest {
        this['body'] = body;
        return this;
    }
}