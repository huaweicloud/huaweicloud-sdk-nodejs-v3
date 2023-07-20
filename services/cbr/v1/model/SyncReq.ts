import { SyncParam } from './SyncParam';


export class SyncReq {
    public sync?: SyncParam;
    public constructor(sync?: SyncParam) { 
        this['sync'] = sync;
    }
    public withSync(sync: SyncParam): SyncReq {
        this['sync'] = sync;
        return this;
    }
}