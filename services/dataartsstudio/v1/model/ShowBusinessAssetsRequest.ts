import { BusinessAssetRequest } from './BusinessAssetRequest';


export class ShowBusinessAssetsRequest {
    public workspace?: string;
    public body?: BusinessAssetRequest;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowBusinessAssetsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BusinessAssetRequest): ShowBusinessAssetsRequest {
        this['body'] = body;
        return this;
    }
}