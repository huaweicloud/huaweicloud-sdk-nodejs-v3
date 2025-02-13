import { ApiVersionObj } from './ApiVersionObj';
import { MonitorSystemKindObj } from './MonitorSystemKindObj';
import { ShowMonitorSystemResponseBodySpec } from './ShowMonitorSystemResponseBodySpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMonitorSystemResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: MonitorSystemKindObj;
    public spec?: ShowMonitorSystemResponseBodySpec;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): ShowMonitorSystemResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: MonitorSystemKindObj): ShowMonitorSystemResponse {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: ShowMonitorSystemResponseBodySpec): ShowMonitorSystemResponse {
        this['spec'] = spec;
        return this;
    }
}