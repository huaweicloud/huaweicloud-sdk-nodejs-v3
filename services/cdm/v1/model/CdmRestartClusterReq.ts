import { CdmRestartClusterReqRestart } from './CdmRestartClusterReqRestart';


export class CdmRestartClusterReq {
    public restart?: CdmRestartClusterReqRestart;
    public constructor(restart?: CdmRestartClusterReqRestart) { 
        this['restart'] = restart;
    }
    public withRestart(restart: CdmRestartClusterReqRestart): CdmRestartClusterReq {
        this['restart'] = restart;
        return this;
    }
}