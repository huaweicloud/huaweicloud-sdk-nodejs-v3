

export class ForceRedirect {
    private 'switch'?: number;
    private 'redirect_type'?: string;
    public constructor(_switch?: number) { 
        this['switch'] = _switch;
    }
    public withSwitch(_switch: number): ForceRedirect {
        this['switch'] = _switch;
        return this;
    }
    public set _switch(_switch: number  | undefined) {
        this['switch'] = _switch;
    }
    public get _switch(): number | undefined {
        return this['switch'];
    }
    public withRedirectType(redirectType: string): ForceRedirect {
        this['redirect_type'] = redirectType;
        return this;
    }
    public set redirectType(redirectType: string  | undefined) {
        this['redirect_type'] = redirectType;
    }
    public get redirectType(): string | undefined {
        return this['redirect_type'];
    }
}