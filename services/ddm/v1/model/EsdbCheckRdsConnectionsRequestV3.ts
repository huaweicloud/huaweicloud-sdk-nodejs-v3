import { EsdbCheckRdsConnectionRequestV3 } from './EsdbCheckRdsConnectionRequestV3';


export class EsdbCheckRdsConnectionsRequestV3 {
    private 'instance_id'?: string;
    public infos?: Array<EsdbCheckRdsConnectionRequestV3>;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): EsdbCheckRdsConnectionsRequestV3 {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInfos(infos: Array<EsdbCheckRdsConnectionRequestV3>): EsdbCheckRdsConnectionsRequestV3 {
        this['infos'] = infos;
        return this;
    }
}