

export class UpdateMfaDeviceForUserReqBody {
    private 'display_name'?: string;
    public constructor() { 
    }
    public withDisplayName(displayName: string): UpdateMfaDeviceForUserReqBody {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
}