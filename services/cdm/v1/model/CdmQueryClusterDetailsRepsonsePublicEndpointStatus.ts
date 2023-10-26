

export class CdmQueryClusterDetailsRepsonsePublicEndpointStatus {
    public status?: string;
    public errorMessage?: string;
    public constructor() { 
    }
    public withStatus(status: string): CdmQueryClusterDetailsRepsonsePublicEndpointStatus {
        this['status'] = status;
        return this;
    }
    public withErrorMessage(errorMessage: string): CdmQueryClusterDetailsRepsonsePublicEndpointStatus {
        this['errorMessage'] = errorMessage;
        return this;
    }
}