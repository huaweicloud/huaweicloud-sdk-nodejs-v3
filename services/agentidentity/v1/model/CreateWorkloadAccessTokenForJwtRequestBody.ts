

export class CreateWorkloadAccessTokenForJwtRequestBody {
    private 'workload_name'?: string;
    private 'user_token'?: string;
    public constructor(workloadName?: string, userToken?: string) { 
        this['workload_name'] = workloadName;
        this['user_token'] = userToken;
    }
    public withWorkloadName(workloadName: string): CreateWorkloadAccessTokenForJwtRequestBody {
        this['workload_name'] = workloadName;
        return this;
    }
    public set workloadName(workloadName: string  | undefined) {
        this['workload_name'] = workloadName;
    }
    public get workloadName(): string | undefined {
        return this['workload_name'];
    }
    public withUserToken(userToken: string): CreateWorkloadAccessTokenForJwtRequestBody {
        this['user_token'] = userToken;
        return this;
    }
    public set userToken(userToken: string  | undefined) {
        this['user_token'] = userToken;
    }
    public get userToken(): string | undefined {
        return this['user_token'];
    }
}