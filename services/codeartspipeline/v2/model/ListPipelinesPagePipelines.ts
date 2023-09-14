import { ListPipelinesPageLatestRun } from './ListPipelinesPageLatestRun';


export class ListPipelinesPagePipelines {
    private 'pipeline_id'?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'component_id'?: string;
    private 'is_publish'?: boolean;
    private 'is_collect'?: boolean;
    private 'manifest_version'?: string;
    private 'create_time'?: number;
    private 'latest_run'?: ListPipelinesPageLatestRun;
    private 'convert_sign'?: number;
    public constructor() { 
    }
    public withPipelineId(pipelineId: string): ListPipelinesPagePipelines {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withName(name: string): ListPipelinesPagePipelines {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): ListPipelinesPagePipelines {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withComponentId(componentId: string): ListPipelinesPagePipelines {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withIsPublish(isPublish: boolean): ListPipelinesPagePipelines {
        this['is_publish'] = isPublish;
        return this;
    }
    public set isPublish(isPublish: boolean  | undefined) {
        this['is_publish'] = isPublish;
    }
    public get isPublish(): boolean | undefined {
        return this['is_publish'];
    }
    public withIsCollect(isCollect: boolean): ListPipelinesPagePipelines {
        this['is_collect'] = isCollect;
        return this;
    }
    public set isCollect(isCollect: boolean  | undefined) {
        this['is_collect'] = isCollect;
    }
    public get isCollect(): boolean | undefined {
        return this['is_collect'];
    }
    public withManifestVersion(manifestVersion: string): ListPipelinesPagePipelines {
        this['manifest_version'] = manifestVersion;
        return this;
    }
    public set manifestVersion(manifestVersion: string  | undefined) {
        this['manifest_version'] = manifestVersion;
    }
    public get manifestVersion(): string | undefined {
        return this['manifest_version'];
    }
    public withCreateTime(createTime: number): ListPipelinesPagePipelines {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withLatestRun(latestRun: ListPipelinesPageLatestRun): ListPipelinesPagePipelines {
        this['latest_run'] = latestRun;
        return this;
    }
    public set latestRun(latestRun: ListPipelinesPageLatestRun  | undefined) {
        this['latest_run'] = latestRun;
    }
    public get latestRun(): ListPipelinesPageLatestRun | undefined {
        return this['latest_run'];
    }
    public withConvertSign(convertSign: number): ListPipelinesPagePipelines {
        this['convert_sign'] = convertSign;
        return this;
    }
    public set convertSign(convertSign: number  | undefined) {
        this['convert_sign'] = convertSign;
    }
    public get convertSign(): number | undefined {
        return this['convert_sign'];
    }
}