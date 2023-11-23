import { RepoInfo } from './RepoInfo';
import { StackResource } from './StackResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFunctionAppResponse extends SdkResponse {
    public name?: string;
    private 'last_modified_time'?: number;
    private 'stack_resources'?: StackResource;
    public status?: string;
    private 'stack_name'?: string;
    private 'stack_id'?: string;
    private 'repo_name'?: string;
    public description?: string;
    public repo?: RepoInfo;
    private 'pipeline_id'?: string;
    private 'project_id'?: string;
    private 'apig_url'?: string;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowFunctionAppResponse {
        this['name'] = name;
        return this;
    }
    public withLastModifiedTime(lastModifiedTime: number): ShowFunctionAppResponse {
        this['last_modified_time'] = lastModifiedTime;
        return this;
    }
    public set lastModifiedTime(lastModifiedTime: number  | undefined) {
        this['last_modified_time'] = lastModifiedTime;
    }
    public get lastModifiedTime(): number | undefined {
        return this['last_modified_time'];
    }
    public withStackResources(stackResources: StackResource): ShowFunctionAppResponse {
        this['stack_resources'] = stackResources;
        return this;
    }
    public set stackResources(stackResources: StackResource  | undefined) {
        this['stack_resources'] = stackResources;
    }
    public get stackResources(): StackResource | undefined {
        return this['stack_resources'];
    }
    public withStatus(status: string): ShowFunctionAppResponse {
        this['status'] = status;
        return this;
    }
    public withStackName(stackName: string): ShowFunctionAppResponse {
        this['stack_name'] = stackName;
        return this;
    }
    public set stackName(stackName: string  | undefined) {
        this['stack_name'] = stackName;
    }
    public get stackName(): string | undefined {
        return this['stack_name'];
    }
    public withStackId(stackId: string): ShowFunctionAppResponse {
        this['stack_id'] = stackId;
        return this;
    }
    public set stackId(stackId: string  | undefined) {
        this['stack_id'] = stackId;
    }
    public get stackId(): string | undefined {
        return this['stack_id'];
    }
    public withRepoName(repoName: string): ShowFunctionAppResponse {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withDescription(description: string): ShowFunctionAppResponse {
        this['description'] = description;
        return this;
    }
    public withRepo(repo: RepoInfo): ShowFunctionAppResponse {
        this['repo'] = repo;
        return this;
    }
    public withPipelineId(pipelineId: string): ShowFunctionAppResponse {
        this['pipeline_id'] = pipelineId;
        return this;
    }
    public set pipelineId(pipelineId: string  | undefined) {
        this['pipeline_id'] = pipelineId;
    }
    public get pipelineId(): string | undefined {
        return this['pipeline_id'];
    }
    public withProjectId(projectId: string): ShowFunctionAppResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withApigUrl(apigUrl: string): ShowFunctionAppResponse {
        this['apig_url'] = apigUrl;
        return this;
    }
    public set apigUrl(apigUrl: string  | undefined) {
        this['apig_url'] = apigUrl;
    }
    public get apigUrl(): string | undefined {
        return this['apig_url'];
    }
}