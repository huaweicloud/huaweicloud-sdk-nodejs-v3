import { UpdateFactoryJobNameRequestBody } from './UpdateFactoryJobNameRequestBody';


export class UpdateFactoryJobNameRequest {
    private 'job_name'?: string;
    public workspace?: string;
    private 'Content-Type'?: string;
    private 'Authorization'?: string;
    private 'Host'?: string;
    public body?: UpdateFactoryJobNameRequestBody;
    public constructor(jobName?: string, workspace?: string) { 
        this['job_name'] = jobName;
        this['workspace'] = workspace;
    }
    public withJobName(jobName: string): UpdateFactoryJobNameRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withWorkspace(workspace: string): UpdateFactoryJobNameRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withContentType(contentType: string): UpdateFactoryJobNameRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAuthorization(authorization: string): UpdateFactoryJobNameRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withHost(host: string): UpdateFactoryJobNameRequest {
        this['Host'] = host;
        return this;
    }
    public set host(host: string  | undefined) {
        this['Host'] = host;
    }
    public get host(): string | undefined {
        return this['Host'];
    }
    public withBody(body: UpdateFactoryJobNameRequestBody): UpdateFactoryJobNameRequest {
        this['body'] = body;
        return this;
    }
}