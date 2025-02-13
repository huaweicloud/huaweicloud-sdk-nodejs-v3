import { ApiVersionObj } from './ApiVersionObj';
import { TimeRuleKindObj } from './TimeRuleKindObj';
import { UpdateTimerRuleDetails } from './UpdateTimerRuleDetails';


export class UpdateTimerRuleReq {
    private 'api_version'?: ApiVersionObj;
    public kind?: TimeRuleKindObj;
    public spec?: UpdateTimerRuleDetails;
    public constructor(apiVersion?: ApiVersionObj, kind?: TimeRuleKindObj, spec?: UpdateTimerRuleDetails) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: ApiVersionObj): UpdateTimerRuleReq {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: TimeRuleKindObj): UpdateTimerRuleReq {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: UpdateTimerRuleDetails): UpdateTimerRuleReq {
        this['spec'] = spec;
        return this;
    }
}