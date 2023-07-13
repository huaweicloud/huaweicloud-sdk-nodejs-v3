

export class ForceRedirect {
    private 'switch': number | undefined;
    private 'redirect_type'?: string | undefined;
    public constructor(_switch?: any) { 
        this['switch'] = _switch;
    }
    public withSwitch(_switch: number): ForceRedirect {
        this['switch'] = _switch;
        return this;
    }
    public set _switch(_switch: number | undefined) {
        this['switch'] = _switch;
    }
    public get _switch() {
        return this['switch'];
    }
    public withRedirectType(redirectType: string): ForceRedirect {
        this['redirect_type'] = redirectType;
        return this;
    }
    public set redirectType(redirectType: string | undefined) {
        this['redirect_type'] = redirectType;
    }
    public get redirectType() {
        return this['redirect_type'];
    }
}