import { Restore } from './Restore';


export class RestoreClusterRequestBody {
    public restore: Restore;
    public constructor(restore?: any) { 
        this['restore'] = restore;
    }
    public withRestore(restore: Restore): RestoreClusterRequestBody {
        this['restore'] = restore;
        return this;
    }
}