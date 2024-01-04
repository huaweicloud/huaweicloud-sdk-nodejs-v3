import { WorkFlowSpec } from './WorkFlowSpec';


export class CreateUpgradeWorkFlowRequestBody {
    public kind?: string;
    public apiVersion?: string;
    public spec?: WorkFlowSpec;
    public constructor(kind?: string, apiVersion?: string, spec?: WorkFlowSpec) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['spec'] = spec;
    }
    public withKind(kind: string): CreateUpgradeWorkFlowRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateUpgradeWorkFlowRequestBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withSpec(spec: WorkFlowSpec): CreateUpgradeWorkFlowRequestBody {
        this['spec'] = spec;
        return this;
    }
}