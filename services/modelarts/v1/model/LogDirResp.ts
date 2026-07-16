import { PFSSummaryResp } from './PFSSummaryResp';


export class LogDirResp {
    public pfs?: PFSSummaryResp;
    public constructor(pfs?: PFSSummaryResp) { 
        this['pfs'] = pfs;
    }
    public withPfs(pfs: PFSSummaryResp): LogDirResp {
        this['pfs'] = pfs;
        return this;
    }
}