

export class AvailableConfig {
    private 'custom_aw_available'?: boolean;
    private 'public_aw_available'?: boolean;
    private 'refresh_aw_available'?: boolean;
    public constructor() { 
    }
    public withCustomAwAvailable(customAwAvailable: boolean): AvailableConfig {
        this['custom_aw_available'] = customAwAvailable;
        return this;
    }
    public set customAwAvailable(customAwAvailable: boolean  | undefined) {
        this['custom_aw_available'] = customAwAvailable;
    }
    public get customAwAvailable(): boolean | undefined {
        return this['custom_aw_available'];
    }
    public withPublicAwAvailable(publicAwAvailable: boolean): AvailableConfig {
        this['public_aw_available'] = publicAwAvailable;
        return this;
    }
    public set publicAwAvailable(publicAwAvailable: boolean  | undefined) {
        this['public_aw_available'] = publicAwAvailable;
    }
    public get publicAwAvailable(): boolean | undefined {
        return this['public_aw_available'];
    }
    public withRefreshAwAvailable(refreshAwAvailable: boolean): AvailableConfig {
        this['refresh_aw_available'] = refreshAwAvailable;
        return this;
    }
    public set refreshAwAvailable(refreshAwAvailable: boolean  | undefined) {
        this['refresh_aw_available'] = refreshAwAvailable;
    }
    public get refreshAwAvailable(): boolean | undefined {
        return this['refresh_aw_available'];
    }
}