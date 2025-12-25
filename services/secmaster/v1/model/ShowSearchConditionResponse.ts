
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSearchConditionResponse extends SdkResponse {
    private 'condition_id'?: string;
    private 'condition_name'?: string;
    private 'dataspace_id'?: string;
    private 'pipe_id'?: string;
    public query?: string;
    public constructor() { 
        super();
    }
    public withConditionId(conditionId: string): ShowSearchConditionResponse {
        this['condition_id'] = conditionId;
        return this;
    }
    public set conditionId(conditionId: string  | undefined) {
        this['condition_id'] = conditionId;
    }
    public get conditionId(): string | undefined {
        return this['condition_id'];
    }
    public withConditionName(conditionName: string): ShowSearchConditionResponse {
        this['condition_name'] = conditionName;
        return this;
    }
    public set conditionName(conditionName: string  | undefined) {
        this['condition_name'] = conditionName;
    }
    public get conditionName(): string | undefined {
        return this['condition_name'];
    }
    public withDataspaceId(dataspaceId: string): ShowSearchConditionResponse {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withPipeId(pipeId: string): ShowSearchConditionResponse {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withQuery(query: string): ShowSearchConditionResponse {
        this['query'] = query;
        return this;
    }
}