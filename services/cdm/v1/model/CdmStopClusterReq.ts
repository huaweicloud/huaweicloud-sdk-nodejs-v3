import { CdmStopClusterReqStop } from './CdmStopClusterReqStop';


export class CdmStopClusterReq {
    public stop?: CdmStopClusterReqStop;
    public constructor(stop?: CdmStopClusterReqStop) { 
        this['stop'] = stop;
    }
    public withStop(stop: CdmStopClusterReqStop): CdmStopClusterReq {
        this['stop'] = stop;
        return this;
    }
}