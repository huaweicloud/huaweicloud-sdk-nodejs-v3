
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVariableGroupResponse extends SdkResponse {
    private 'pipeline_variable_group_id'?: string;
    public constructor() { 
        super();
    }
    public withPipelineVariableGroupId(pipelineVariableGroupId: string): CreateVariableGroupResponse {
        this['pipeline_variable_group_id'] = pipelineVariableGroupId;
        return this;
    }
    public set pipelineVariableGroupId(pipelineVariableGroupId: string  | undefined) {
        this['pipeline_variable_group_id'] = pipelineVariableGroupId;
    }
    public get pipelineVariableGroupId(): string | undefined {
        return this['pipeline_variable_group_id'];
    }
}