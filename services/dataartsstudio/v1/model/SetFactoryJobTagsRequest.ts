import { SetJobTagsRequestBody } from './SetJobTagsRequestBody';


export class SetFactoryJobTagsRequest {
    public workspace?: string;
    private 'job_name'?: string;
    private 'Content-Type'?: string;
    private 'Authorization'?: string;
    private 'Host'?: string;
    public body?: SetJobTagsRequestBody;
    public constructor(jobName?: string) { 
        this['job_name'] = jobName;
    }
    public withWorkspace(workspace: string): SetFactoryJobTagsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withJobName(jobName: string): SetFactoryJobTagsRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withContentType(contentType: string): SetFactoryJobTagsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAuthorization(authorization: string): SetFactoryJobTagsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withHost(host: string): SetFactoryJobTagsRequest {
        this['Host'] = host;
        return this;
    }
    public set host(host: string  | undefined) {
        this['Host'] = host;
    }
    public get host(): string | undefined {
        return this['Host'];
    }
    public withBody(body: SetJobTagsRequestBody): SetFactoryJobTagsRequest {
        this['body'] = body;
        return this;
    }
}