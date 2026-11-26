

export class CreateWorkloadAccessTokenForUserIdRequestBody {
    private 'workload_name'?: string;
    private 'user_id'?: string;
    public constructor(workloadName?: string, userId?: string) { 
        this['workload_name'] = workloadName;
        this['user_id'] = userId;
    }
    public withWorkloadName(workloadName: string): CreateWorkloadAccessTokenForUserIdRequestBody {
        this['workload_name'] = workloadName;
        return this;
    }
    public set workloadName(workloadName: string  | undefined) {
        this['workload_name'] = workloadName;
    }
    public get workloadName(): string | undefined {
        return this['workload_name'];
    }
    public withUserId(userId: string): CreateWorkloadAccessTokenForUserIdRequestBody {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}