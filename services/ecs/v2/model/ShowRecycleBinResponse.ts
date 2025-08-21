import { RecycleBinPolicys } from './RecycleBinPolicys';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecycleBinResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'switch'?: string;
    public policy?: RecycleBinPolicys;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): ShowRecycleBinResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSwitch(_switch: string): ShowRecycleBinResponse {
        this['switch'] = _switch;
        return this;
    }
    public set _switch(_switch: string  | undefined) {
        this['switch'] = _switch;
    }
    public get _switch(): string | undefined {
        return this['switch'];
    }
    public withPolicy(policy: RecycleBinPolicys): ShowRecycleBinResponse {
        this['policy'] = policy;
        return this;
    }
}