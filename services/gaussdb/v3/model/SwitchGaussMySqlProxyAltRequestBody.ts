

export class SwitchGaussMySqlProxyAltRequestBody {
    private 'alt_enabled'?: string;
    private 'alt_for_readonly'?: string;
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
    public withAltForReadonly(altForReadonly: string): SwitchGaussMySqlProxyAltRequestBody {
        this['alt_for_readonly'] = altForReadonly;
        return this;
    }
    public set altForReadonly(altForReadonly: string  | undefined) {
        this['alt_for_readonly'] = altForReadonly;
    }
    public get altForReadonly(): string | undefined {
        return this['alt_for_readonly'];
    }
}