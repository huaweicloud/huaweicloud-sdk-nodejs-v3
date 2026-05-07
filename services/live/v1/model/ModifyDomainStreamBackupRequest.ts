import { DomainStreamBackupInfo } from './DomainStreamBackupInfo';


export class ModifyDomainStreamBackupRequest {
    public body?: DomainStreamBackupInfo;
    public constructor() { 
    }
    public withBody(body: DomainStreamBackupInfo): ModifyDomainStreamBackupRequest {
        this['body'] = body;
        return this;
    }
}