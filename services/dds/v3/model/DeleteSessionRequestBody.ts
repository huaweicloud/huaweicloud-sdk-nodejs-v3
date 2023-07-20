

export class DeleteSessionRequestBody {
    public sessions?: Array<string>;
    public constructor(sessions?: Array<string>) { 
        this['sessions'] = sessions;
    }
    public withSessions(sessions: Array<string>): DeleteSessionRequestBody {
        this['sessions'] = sessions;
        return this;
    }
}