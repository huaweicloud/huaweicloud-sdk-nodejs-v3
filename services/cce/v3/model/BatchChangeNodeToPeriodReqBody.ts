import { PeriodOrderParam } from './PeriodOrderParam';


export class BatchChangeNodeToPeriodReqBody {
    public kind?: string;
    public apiVersion?: string;
    public nodeList?: Array<string>;
    public periodOrderParam?: PeriodOrderParam;
    public includeResources?: Array<string>;
    public constructor(nodeList?: Array<string>, periodOrderParam?: PeriodOrderParam) { 
        this['nodeList'] = nodeList;
        this['periodOrderParam'] = periodOrderParam;
    }
    public withKind(kind: string): BatchChangeNodeToPeriodReqBody {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): BatchChangeNodeToPeriodReqBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withNodeList(nodeList: Array<string>): BatchChangeNodeToPeriodReqBody {
        this['nodeList'] = nodeList;
        return this;
    }
    public withPeriodOrderParam(periodOrderParam: PeriodOrderParam): BatchChangeNodeToPeriodReqBody {
        this['periodOrderParam'] = periodOrderParam;
        return this;
    }
    public withIncludeResources(includeResources: Array<string>): BatchChangeNodeToPeriodReqBody {
        this['includeResources'] = includeResources;
        return this;
    }
}