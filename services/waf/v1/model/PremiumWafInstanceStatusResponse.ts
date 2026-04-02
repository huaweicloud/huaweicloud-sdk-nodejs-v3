

export class PremiumWafInstanceStatusResponse {
    public id?: string;
    private 'instance_name'?: string;
    public status?: number;
    private 'run_status'?: number;
    private 'access_status'?: number;
    public constructor() { 
    }
    public withId(id: string): PremiumWafInstanceStatusResponse {
        this['id'] = id;
        return this;
    }
    public withInstanceName(instanceName: string): PremiumWafInstanceStatusResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withStatus(status: number): PremiumWafInstanceStatusResponse {
        this['status'] = status;
        return this;
    }
    public withRunStatus(runStatus: number): PremiumWafInstanceStatusResponse {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: number  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): number | undefined {
        return this['run_status'];
    }
    public withAccessStatus(accessStatus: number): PremiumWafInstanceStatusResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): number | undefined {
        return this['access_status'];
    }
}