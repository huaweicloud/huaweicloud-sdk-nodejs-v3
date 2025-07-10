import { ProjectRepository } from './ProjectRepository';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateProjectAndRepositoriesResponse extends SdkResponse {
    public error?: Error;
    public result?: ProjectRepository;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): CreateProjectAndRepositoriesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: ProjectRepository): CreateProjectAndRepositoriesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateProjectAndRepositoriesResponse {
        this['status'] = status;
        return this;
    }
}