

export class ActionsPipelineRunsQueryDTO {
    public page?: number;
    private 'page_size'?: string;
    private 'https_url'?: string;
    private 'pipeline_name'?: string;
    private 'file_path'?: string;
    private 'pipeline_run_name'?: string;
    public event?: string;
    public actor?: string;
    public branch?: string;
    public status?: string;
    public constructor(httpsUrl?: string) { 
        this['https_url'] = httpsUrl;
    }
    public withPage(page: number): ActionsPipelineRunsQueryDTO {
        this['page'] = page;
        return this;
    }
    public withPageSize(pageSize: string): ActionsPipelineRunsQueryDTO {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: string  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): string | undefined {
        return this['page_size'];
    }
    public withHttpsUrl(httpsUrl: string): ActionsPipelineRunsQueryDTO {
        this['https_url'] = httpsUrl;
        return this;
    }
    public set httpsUrl(httpsUrl: string  | undefined) {
        this['https_url'] = httpsUrl;
    }
    public get httpsUrl(): string | undefined {
        return this['https_url'];
    }
    public withPipelineName(pipelineName: string): ActionsPipelineRunsQueryDTO {
        this['pipeline_name'] = pipelineName;
        return this;
    }
    public set pipelineName(pipelineName: string  | undefined) {
        this['pipeline_name'] = pipelineName;
    }
    public get pipelineName(): string | undefined {
        return this['pipeline_name'];
    }
    public withFilePath(filePath: string): ActionsPipelineRunsQueryDTO {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withPipelineRunName(pipelineRunName: string): ActionsPipelineRunsQueryDTO {
        this['pipeline_run_name'] = pipelineRunName;
        return this;
    }
    public set pipelineRunName(pipelineRunName: string  | undefined) {
        this['pipeline_run_name'] = pipelineRunName;
    }
    public get pipelineRunName(): string | undefined {
        return this['pipeline_run_name'];
    }
    public withEvent(event: string): ActionsPipelineRunsQueryDTO {
        this['event'] = event;
        return this;
    }
    public withActor(actor: string): ActionsPipelineRunsQueryDTO {
        this['actor'] = actor;
        return this;
    }
    public withBranch(branch: string): ActionsPipelineRunsQueryDTO {
        this['branch'] = branch;
        return this;
    }
    public withStatus(status: string): ActionsPipelineRunsQueryDTO {
        this['status'] = status;
        return this;
    }
}