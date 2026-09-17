import { ListVariableGroupsRespPipelineVariableGroups } from './ListVariableGroupsRespPipelineVariableGroups';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVariableGroupsResponse extends SdkResponse {
    private 'pipeline_variable_groups'?: Array<ListVariableGroupsRespPipelineVariableGroups>;
    public offset?: number;
    public limit?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withPipelineVariableGroups(pipelineVariableGroups: Array<ListVariableGroupsRespPipelineVariableGroups>): ListVariableGroupsResponse {
        this['pipeline_variable_groups'] = pipelineVariableGroups;
        return this;
    }
    public set pipelineVariableGroups(pipelineVariableGroups: Array<ListVariableGroupsRespPipelineVariableGroups>  | undefined) {
        this['pipeline_variable_groups'] = pipelineVariableGroups;
    }
    public get pipelineVariableGroups(): Array<ListVariableGroupsRespPipelineVariableGroups> | undefined {
        return this['pipeline_variable_groups'];
    }
    public withOffset(offset: number): ListVariableGroupsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListVariableGroupsResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListVariableGroupsResponse {
        this['total'] = total;
        return this;
    }
}