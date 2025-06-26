

export class UpdateInstanceConfigurationRequestBody {
    private 'anonymous_access'?: boolean;
    public constructor(anonymousAccess?: boolean) { 
        this['anonymous_access'] = anonymousAccess;
    }
    public withAnonymousAccess(anonymousAccess: boolean): UpdateInstanceConfigurationRequestBody {
        this['anonymous_access'] = anonymousAccess;
        return this;
    }
    public set anonymousAccess(anonymousAccess: boolean  | undefined) {
        this['anonymous_access'] = anonymousAccess;
    }
    public get anonymousAccess(): boolean | undefined {
        return this['anonymous_access'];
    }
}