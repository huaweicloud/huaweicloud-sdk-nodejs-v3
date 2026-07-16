import { PFSSummary } from './PFSSummary';


export class LogDir {
    public pfs?: PFSSummary;
    public constructor(pfs?: PFSSummary) { 
        this['pfs'] = pfs;
    }
    public withPfs(pfs: PFSSummary): LogDir {
        this['pfs'] = pfs;
        return this;
    }
}