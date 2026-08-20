
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestartInstanceResponse extends SdkResponse {
    private 'instance_id'?: string;
    public nodes?: Array<string>;
    public result?: string;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): RestartInstanceResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodes(nodes: Array<string>): RestartInstanceResponse {
        this['nodes'] = nodes;
        return this;
    }
    public withResult(result: string): RestartInstanceResponse {
        this['result'] = result;
        return this;
    }
}