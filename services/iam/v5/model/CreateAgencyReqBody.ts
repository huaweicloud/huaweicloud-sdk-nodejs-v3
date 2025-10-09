

export class CreateAgencyReqBody {
    private 'agency_name'?: string;
    public path?: string;
    private 'trust_policy'?: string;
    private 'max_session_duration'?: number;
    public description?: string;
    public constructor(agencyName?: string, trustPolicy?: string) { 
        this['agency_name'] = agencyName;
        this['trust_policy'] = trustPolicy;
    }
    public withAgencyName(agencyName: string): CreateAgencyReqBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withPath(path: string): CreateAgencyReqBody {
        this['path'] = path;
        return this;
    }
    public withTrustPolicy(trustPolicy: string): CreateAgencyReqBody {
        this['trust_policy'] = trustPolicy;
        return this;
    }
    public set trustPolicy(trustPolicy: string  | undefined) {
        this['trust_policy'] = trustPolicy;
    }
    public get trustPolicy(): string | undefined {
        return this['trust_policy'];
    }
    public withMaxSessionDuration(maxSessionDuration: number): CreateAgencyReqBody {
        this['max_session_duration'] = maxSessionDuration;
        return this;
    }
    public set maxSessionDuration(maxSessionDuration: number  | undefined) {
        this['max_session_duration'] = maxSessionDuration;
    }
    public get maxSessionDuration(): number | undefined {
        return this['max_session_duration'];
    }
    public withDescription(description: string): CreateAgencyReqBody {
        this['description'] = description;
        return this;
    }
}