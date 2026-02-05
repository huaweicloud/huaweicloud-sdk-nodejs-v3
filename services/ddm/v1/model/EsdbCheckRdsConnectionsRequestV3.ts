import { EsdbCheckRdsConnectionRequestV3 } from './EsdbCheckRdsConnectionRequestV3';


export class EsdbCheckRdsConnectionsRequestV3 {
    public infos?: Array<EsdbCheckRdsConnectionRequestV3>;
    public constructor(infos?: Array<EsdbCheckRdsConnectionRequestV3>) { 
        this['infos'] = infos;
    }
    public withInfos(infos: Array<EsdbCheckRdsConnectionRequestV3>): EsdbCheckRdsConnectionsRequestV3 {
        this['infos'] = infos;
        return this;
    }
}