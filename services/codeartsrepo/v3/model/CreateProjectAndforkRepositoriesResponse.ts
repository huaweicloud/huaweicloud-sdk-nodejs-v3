import { ProjectRepository } from './ProjectRepository';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateProjectAndforkRepositoriesResponse extends SdkResponse {
    public error?: Error;
    public result?: ProjectRepository;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): CreateProjectAndforkRepositoriesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: ProjectRepository): CreateProjectAndforkRepositoriesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateProjectAndforkRepositoriesResponse {
        this['status'] = status;
        return this;
    }
}