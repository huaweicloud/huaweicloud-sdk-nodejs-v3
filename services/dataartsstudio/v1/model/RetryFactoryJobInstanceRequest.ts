import { RetryFactoryJobInstanceBody } from './RetryFactoryJobInstanceBody';


export class RetryFactoryJobInstanceRequest {
    private 'job_name'?: string;
    public workspace?: string;
    private 'Content-Type'?: string;
    private 'X-Project-Id'?: string;
    public body?: RetryFactoryJobInstanceBody;
    public constructor(jobName?: string, workspace?: string) { 
        this['job_name'] = jobName;
        this['workspace'] = workspace;
    }
    public withJobName(jobName: string): RetryFactoryJobInstanceRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withWorkspace(workspace: string): RetryFactoryJobInstanceRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withContentType(contentType: string): RetryFactoryJobInstanceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXProjectId(xProjectId: string): RetryFactoryJobInstanceRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withBody(body: RetryFactoryJobInstanceBody): RetryFactoryJobInstanceRequest {
        this['body'] = body;
        return this;
    }
}