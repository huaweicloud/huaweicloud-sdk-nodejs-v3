

export class ActionsManualRunPipelineDTO {
    private 'https_url'?: string;
    private 'file_path'?: string;
    private 'file_content'?: string;
    public branch?: string;
    public encoding?: string;
    public tag?: string;
    private 'commit_id'?: string;
    private 'access_token'?: string;
    public constructor() { 
    }
    public withHttpsUrl(httpsUrl: string): ActionsManualRunPipelineDTO {
        this['https_url'] = httpsUrl;
        return this;
    }
    public set httpsUrl(httpsUrl: string  | undefined) {
        this['https_url'] = httpsUrl;
    }
    public get httpsUrl(): string | undefined {
        return this['https_url'];
    }
    public withFilePath(filePath: string): ActionsManualRunPipelineDTO {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileContent(fileContent: string): ActionsManualRunPipelineDTO {
        this['file_content'] = fileContent;
        return this;
    }
    public set fileContent(fileContent: string  | undefined) {
        this['file_content'] = fileContent;
    }
    public get fileContent(): string | undefined {
        return this['file_content'];
    }
    public withBranch(branch: string): ActionsManualRunPipelineDTO {
        this['branch'] = branch;
        return this;
    }
    public withEncoding(encoding: string): ActionsManualRunPipelineDTO {
        this['encoding'] = encoding;
        return this;
    }
    public withTag(tag: string): ActionsManualRunPipelineDTO {
        this['tag'] = tag;
        return this;
    }
    public withCommitId(commitId: string): ActionsManualRunPipelineDTO {
        this['commit_id'] = commitId;
        return this;
    }
    public set commitId(commitId: string  | undefined) {
        this['commit_id'] = commitId;
    }
    public get commitId(): string | undefined {
        return this['commit_id'];
    }
    public withAccessToken(accessToken: string): ActionsManualRunPipelineDTO {
        this['access_token'] = accessToken;
        return this;
    }
    public set accessToken(accessToken: string  | undefined) {
        this['access_token'] = accessToken;
    }
    public get accessToken(): string | undefined {
        return this['access_token'];
    }
}