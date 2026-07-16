import { NfsResp } from './NfsResp';


export class JobVolumeResp {
    public nfs?: NfsResp;
    public constructor() { 
    }
    public withNfs(nfs: NfsResp): JobVolumeResp {
        this['nfs'] = nfs;
        return this;
    }
}