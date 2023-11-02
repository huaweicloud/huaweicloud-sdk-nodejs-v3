import { EntityWithExtInfo } from './EntityWithExtInfo';


export class CreateOrUpdateAssetRequest {
    public workspace?: string;
    public body?: EntityWithExtInfo;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateOrUpdateAssetRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: EntityWithExtInfo): CreateOrUpdateAssetRequest {
        this['body'] = body;
        return this;
    }
}