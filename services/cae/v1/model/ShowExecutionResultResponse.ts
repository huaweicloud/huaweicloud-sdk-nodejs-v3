import { ApiVersionObj } from './ApiVersionObj';
import { ExecutionDetails } from './ExecutionDetails';
import { TimeRuleKindObj } from './TimeRuleKindObj';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowExecutionResultResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: TimeRuleKindObj;
    public spec?: ExecutionDetails;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ShowExecutionResultResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: TimeRuleKindObj): ShowExecutionResultResponse {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: ExecutionDetails): ShowExecutionResultResponse {
        this['spec'] = spec;
        return this;
    }
}