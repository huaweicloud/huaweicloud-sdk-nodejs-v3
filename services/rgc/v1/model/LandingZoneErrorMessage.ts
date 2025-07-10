

export class LandingZoneErrorMessage {
    public level?: string;
    public message?: string;
    public constructor() { 
    }
    public withLevel(level: string): LandingZoneErrorMessage {
        this['level'] = level;
        return this;
    }
    public withMessage(message: string): LandingZoneErrorMessage {
        this['message'] = message;
        return this;
    }
}