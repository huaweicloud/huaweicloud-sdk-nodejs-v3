

export class UpdateAgencyReqBody {
    private 'max_session_duration'?: number;
    public description?: string;
    public constructor() { 
    }
    public withMaxSessionDuration(maxSessionDuration: number): UpdateAgencyReqBody {
        this['max_session_duration'] = maxSessionDuration;
        return this;
    }
    public set maxSessionDuration(maxSessionDuration: number  | undefined) {
        this['max_session_duration'] = maxSessionDuration;
    }
    public get maxSessionDuration(): number | undefined {
        return this['max_session_duration'];
    }
    public withDescription(description: string): UpdateAgencyReqBody {
        this['description'] = description;
        return this;
    }
}