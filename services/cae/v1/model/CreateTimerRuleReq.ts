import { ApiVersionObj } from './ApiVersionObj';
import { TimeRuleKindObj } from './TimeRuleKindObj';
import { UpdateTimerRuleDetails } from './UpdateTimerRuleDetails';


export class CreateTimerRuleReq {
    private 'api_version'?: ApiVersionObj;
    public kind?: TimeRuleKindObj;
    public spec?: UpdateTimerRuleDetails;
    public constructor() { 
    }
    public withApiVersion(apiVersion: ApiVersionObj): CreateTimerRuleReq {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: TimeRuleKindObj): CreateTimerRuleReq {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: UpdateTimerRuleDetails): CreateTimerRuleReq {
        this['spec'] = spec;
        return this;
    }
}