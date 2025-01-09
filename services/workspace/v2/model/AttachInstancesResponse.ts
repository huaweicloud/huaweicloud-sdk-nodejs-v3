
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AttachInstancesResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'get_job_endpoint'?: string;
    private 'max_provision_time'?: number;
    private 'min_provision_time'?: number;
    private 'periodic_query_time'?: number;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): AttachInstancesResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withGetJobEndpoint(getJobEndpoint: string): AttachInstancesResponse {
        this['get_job_endpoint'] = getJobEndpoint;
        return this;
    }
    public set getJobEndpoint(getJobEndpoint: string  | undefined) {
        this['get_job_endpoint'] = getJobEndpoint;
    }
    public get getJobEndpoint(): string | undefined {
        return this['get_job_endpoint'];
    }
    public withMaxProvisionTime(maxProvisionTime: number): AttachInstancesResponse {
        this['max_provision_time'] = maxProvisionTime;
        return this;
    }
    public set maxProvisionTime(maxProvisionTime: number  | undefined) {
        this['max_provision_time'] = maxProvisionTime;
    }
    public get maxProvisionTime(): number | undefined {
        return this['max_provision_time'];
    }
    public withMinProvisionTime(minProvisionTime: number): AttachInstancesResponse {
        this['min_provision_time'] = minProvisionTime;
        return this;
    }
    public set minProvisionTime(minProvisionTime: number  | undefined) {
        this['min_provision_time'] = minProvisionTime;
    }
    public get minProvisionTime(): number | undefined {
        return this['min_provision_time'];
    }
    public withPeriodicQueryTime(periodicQueryTime: number): AttachInstancesResponse {
        this['periodic_query_time'] = periodicQueryTime;
        return this;
    }
    public set periodicQueryTime(periodicQueryTime: number  | undefined) {
        this['periodic_query_time'] = periodicQueryTime;
    }
    public get periodicQueryTime(): number | undefined {
        return this['periodic_query_time'];
    }
}