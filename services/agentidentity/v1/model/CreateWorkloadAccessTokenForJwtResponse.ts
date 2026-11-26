
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateWorkloadAccessTokenForJwtResponse extends SdkResponse {
    private 'workload_access_token'?: string;
    public constructor() { 
        super();
    }
    public withWorkloadAccessToken(workloadAccessToken: string): CreateWorkloadAccessTokenForJwtResponse {
        this['workload_access_token'] = workloadAccessToken;
        return this;
    }
    public set workloadAccessToken(workloadAccessToken: string  | undefined) {
        this['workload_access_token'] = workloadAccessToken;
    }
    public get workloadAccessToken(): string | undefined {
        return this['workload_access_token'];
    }
}