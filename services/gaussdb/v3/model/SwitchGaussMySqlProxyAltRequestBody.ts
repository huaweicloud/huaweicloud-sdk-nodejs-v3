

export class SwitchGaussMySqlProxyAltRequestBody {
    private 'alt_enabled'?: string;
    public constructor(altEnabled?: string) { 
        this['alt_enabled'] = altEnabled;
    }
    public withAltEnabled(altEnabled: string): SwitchGaussMySqlProxyAltRequestBody {
        this['alt_enabled'] = altEnabled;
        return this;
    }
    public set altEnabled(altEnabled: string  | undefined) {
        this['alt_enabled'] = altEnabled;
    }
    public get altEnabled(): string | undefined {
        return this['alt_enabled'];
    }
}