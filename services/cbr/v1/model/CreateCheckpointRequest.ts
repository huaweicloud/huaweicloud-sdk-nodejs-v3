import { VaultBackupReq } from './VaultBackupReq';


export class CreateCheckpointRequest {
    public body?: VaultBackupReq;
    public constructor() { 
    }
    public withBody(body: VaultBackupReq): CreateCheckpointRequest {
        this['body'] = body;
        return this;
    }
}