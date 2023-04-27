import { VaultResourceInstancesReq } from './VaultResourceInstancesReq';


export class ShowVaultResourceInstancesRequest {
    public body?: VaultResourceInstancesReq;
    public constructor() { 
    }
    public withBody(body: VaultResourceInstancesReq): ShowVaultResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}