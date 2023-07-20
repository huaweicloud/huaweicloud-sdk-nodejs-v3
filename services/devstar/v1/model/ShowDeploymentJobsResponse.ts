
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeploymentJobsResponse extends SdkResponse {
    public id?: number;
    private 'job_id'?: string;
    public status?: number;
    public address?: string;
    private 'deploy_parameters'?: string;
    public time?: number;
    private 'creator_name'?: string;
    private 'created_time'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowDeploymentJobsResponse {
        this['id'] = id;
        return this;
    }
    public withJobId(jobId: string): ShowDeploymentJobsResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: number): ShowDeploymentJobsResponse {
        this['status'] = status;
        return this;
    }
    public withAddress(address: string): ShowDeploymentJobsResponse {
        this['address'] = address;
        return this;
    }
    public withDeployParameters(deployParameters: string): ShowDeploymentJobsResponse {
        this['deploy_parameters'] = deployParameters;
        return this;
    }
    public set deployParameters(deployParameters: string  | undefined) {
        this['deploy_parameters'] = deployParameters;
    }
    public get deployParameters(): string | undefined {
        return this['deploy_parameters'];
    }
    public withTime(time: number): ShowDeploymentJobsResponse {
        this['time'] = time;
        return this;
    }
    public withCreatorName(creatorName: string): ShowDeploymentJobsResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreatedTime(createdTime: string): ShowDeploymentJobsResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
}