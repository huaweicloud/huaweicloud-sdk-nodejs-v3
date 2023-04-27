import { VaultCreateReq } from './VaultCreateReq';


export class CreateVaultRequest {
    public body?: VaultCreateReq;
    public constructor() { 
    }
    public withBody(body: VaultCreateReq): CreateVaultRequest {
        this['body'] = body;
        return this;
    }
}