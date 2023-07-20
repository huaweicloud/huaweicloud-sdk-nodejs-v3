import { PostTranscriberJobs } from './PostTranscriberJobs';


export class PushTranscriberJobsRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: PostTranscriberJobs;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PushTranscriberJobsRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: PostTranscriberJobs): PushTranscriberJobsRequest {
        this['body'] = body;
        return this;
    }
}