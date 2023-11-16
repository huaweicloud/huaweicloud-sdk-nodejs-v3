import { PipelineGroupBindDTOPipelines } from './PipelineGroupBindDTOPipelines';


export class PipelineGroupBindDTO {
    private 'group_id'?: string;
    public pipelines?: Array<PipelineGroupBindDTOPipelines>;
    public constructor(groupId?: string, pipelines?: Array<PipelineGroupBindDTOPipelines>) { 
        this['group_id'] = groupId;
        this['pipelines'] = pipelines;
    }
    public withGroupId(groupId: string): PipelineGroupBindDTO {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withPipelines(pipelines: Array<PipelineGroupBindDTOPipelines>): PipelineGroupBindDTO {
        this['pipelines'] = pipelines;
        return this;
    }
}