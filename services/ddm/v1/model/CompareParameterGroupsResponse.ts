import { ParamGroupParameterDiffV3 } from './ParamGroupParameterDiffV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CompareParameterGroupsResponse extends SdkResponse {
    private 'source_id'?: string;
    private 'source_name'?: string;
    private 'target_id'?: string;
    private 'target_name'?: string;
    public parameters?: Array<ParamGroupParameterDiffV3>;
    public constructor() { 
        super();
    }
    public withSourceId(sourceId: string): CompareParameterGroupsResponse {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withSourceName(sourceName: string): CompareParameterGroupsResponse {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withTargetId(targetId: string): CompareParameterGroupsResponse {
        this['target_id'] = targetId;
        return this;
    }
    public set targetId(targetId: string  | undefined) {
        this['target_id'] = targetId;
    }
    public get targetId(): string | undefined {
        return this['target_id'];
    }
    public withTargetName(targetName: string): CompareParameterGroupsResponse {
        this['target_name'] = targetName;
        return this;
    }
    public set targetName(targetName: string  | undefined) {
        this['target_name'] = targetName;
    }
    public get targetName(): string | undefined {
        return this['target_name'];
    }
    public withParameters(parameters: Array<ParamGroupParameterDiffV3>): CompareParameterGroupsResponse {
        this['parameters'] = parameters;
        return this;
    }
}