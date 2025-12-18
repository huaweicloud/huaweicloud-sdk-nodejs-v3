import { EsdbCheckRdsConnectionsRequestV3 } from './EsdbCheckRdsConnectionsRequestV3';


export class CheckDataNodeConnectionV0V3Request {
    public body?: EsdbCheckRdsConnectionsRequestV3;
    public constructor() { 
    }
    public withBody(body: EsdbCheckRdsConnectionsRequestV3): CheckDataNodeConnectionV0V3Request {
        this['body'] = body;
        return this;
    }
}