

export class UpdateSwitchRequest {
    private 'log_converge_switch'?: string;
    private 'Content-Type'?: string;
    public constructor(logConvergeSwitch?: string, contentType?: string) { 
        this['log_converge_switch'] = logConvergeSwitch;
        this['Content-Type'] = contentType;
    }
    public withLogConvergeSwitch(logConvergeSwitch: string): UpdateSwitchRequest {
        this['log_converge_switch'] = logConvergeSwitch;
        return this;
    }
    public set logConvergeSwitch(logConvergeSwitch: string  | undefined) {
        this['log_converge_switch'] = logConvergeSwitch;
    }
    public get logConvergeSwitch(): string | undefined {
        return this['log_converge_switch'];
    }
    public withContentType(contentType: string): UpdateSwitchRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}