import { UpdateAccessAddressBackupConfigReq } from './UpdateAccessAddressBackupConfigReq';


export class UpdateAccessAddressBackupConfigRequest {
    public body?: UpdateAccessAddressBackupConfigReq;
    public constructor() { 
    }
    public withBody(body: UpdateAccessAddressBackupConfigReq): UpdateAccessAddressBackupConfigRequest {
        this['body'] = body;
        return this;
    }
}