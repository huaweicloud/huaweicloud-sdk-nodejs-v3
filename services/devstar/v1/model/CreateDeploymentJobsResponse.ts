
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDeploymentJobsResponse extends SdkResponse {
    public id?: number;
    private 'job_id'?: string | undefined;
    public status?: number;
    public address?: string;
    private 'deploy_parameters'?: string | undefined;
    public time?: number;
    private 'creator_name'?: string | undefined;
    private 'created_time'?: string | undefined;
    public constructor() { 
        super();
    }
    public withId(id: number): CreateDeploymentJobsResponse {
        this['id'] = id;
        return this;
    }
    public withJobId(jobId: string): CreateDeploymentJobsResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withStatus(status: number): CreateDeploymentJobsResponse {
        this['status'] = status;
        return this;
    }
    public withAddress(address: string): CreateDeploymentJobsResponse {
        this['address'] = address;
        return this;
    }
    public withDeployParameters(deployParameters: string): CreateDeploymentJobsResponse {
        this['deploy_parameters'] = deployParameters;
        return this;
    }
    public set deployParameters(deployParameters: string | undefined) {
        this['deploy_parameters'] = deployParameters;
    }
    public get deployParameters() {
        return this['deploy_parameters'];
    }
    public withTime(time: number): CreateDeploymentJobsResponse {
        this['time'] = time;
        return this;
    }
    public withCreatorName(creatorName: string): CreateDeploymentJobsResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName() {
        return this['creator_name'];
    }
    public withCreatedTime(createdTime: string): CreateDeploymentJobsResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime() {
        return this['created_time'];
    }
}