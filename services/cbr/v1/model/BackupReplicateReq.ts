import { BackupReplicateReqBody } from './BackupReplicateReqBody';


export class BackupReplicateReq {
    public replicate: BackupReplicateReqBody;
    public constructor(replicate?: any) { 
        this['replicate'] = replicate;
    }
    public withReplicate(replicate: BackupReplicateReqBody): BackupReplicateReq {
        this['replicate'] = replicate;
        return this;
    }
}