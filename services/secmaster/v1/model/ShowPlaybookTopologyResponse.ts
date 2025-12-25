import { ActionInstanceInfo } from './ActionInstanceInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPlaybookTopologyResponse extends SdkResponse {
    public count?: number;
    private 'action_instances'?: Array<ActionInstanceInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowPlaybookTopologyResponse {
        this['count'] = count;
        return this;
    }
    public withActionInstances(actionInstances: Array<ActionInstanceInfo>): ShowPlaybookTopologyResponse {
        this['action_instances'] = actionInstances;
        return this;
    }
    public set actionInstances(actionInstances: Array<ActionInstanceInfo>  | undefined) {
        this['action_instances'] = actionInstances;
    }
    public get actionInstances(): Array<ActionInstanceInfo> | undefined {
        return this['action_instances'];
    }
    public withXRequestId(xRequestId: string): ShowPlaybookTopologyResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}