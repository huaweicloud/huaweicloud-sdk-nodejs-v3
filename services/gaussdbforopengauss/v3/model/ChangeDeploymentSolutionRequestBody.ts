

export class ChangeDeploymentSolutionRequestBody {
    public solution?: ChangeDeploymentSolutionRequestBodySolutionEnum | string;
    private 'availability_zone'?: string;
    private 'master_az'?: string;
    private 'logger_az'?: string;
    public constructor(solution?: string, availabilityZone?: string) { 
        this['solution'] = solution;
        this['availability_zone'] = availabilityZone;
    }
    public withSolution(solution: ChangeDeploymentSolutionRequestBodySolutionEnum | string): ChangeDeploymentSolutionRequestBody {
        this['solution'] = solution;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): ChangeDeploymentSolutionRequestBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withMasterAz(masterAz: string): ChangeDeploymentSolutionRequestBody {
        this['master_az'] = masterAz;
        return this;
    }
    public set masterAz(masterAz: string  | undefined) {
        this['master_az'] = masterAz;
    }
    public get masterAz(): string | undefined {
        return this['master_az'];
    }
    public withLoggerAz(loggerAz: string): ChangeDeploymentSolutionRequestBody {
        this['logger_az'] = loggerAz;
        return this;
    }
    public set loggerAz(loggerAz: string  | undefined) {
        this['logger_az'] = loggerAz;
    }
    public get loggerAz(): string | undefined {
        return this['logger_az'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeDeploymentSolutionRequestBodySolutionEnum {
    LOGGER = 'logger',
    TRISET = 'triset'
}
