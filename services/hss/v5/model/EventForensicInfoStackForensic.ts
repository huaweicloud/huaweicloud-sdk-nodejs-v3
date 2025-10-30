

export class EventForensicInfoStackForensic {
    private 'attack_input_value'?: string;
    private 'app_stack'?: string;
    private 'chk_probe'?: number;
    private 'chk_rule'?: number;
    private 'plugin_name'?: number;
    public constructor() { 
    }
    public withAttackInputValue(attackInputValue: string): EventForensicInfoStackForensic {
        this['attack_input_value'] = attackInputValue;
        return this;
    }
    public set attackInputValue(attackInputValue: string  | undefined) {
        this['attack_input_value'] = attackInputValue;
    }
    public get attackInputValue(): string | undefined {
        return this['attack_input_value'];
    }
    public withAppStack(appStack: string): EventForensicInfoStackForensic {
        this['app_stack'] = appStack;
        return this;
    }
    public set appStack(appStack: string  | undefined) {
        this['app_stack'] = appStack;
    }
    public get appStack(): string | undefined {
        return this['app_stack'];
    }
    public withChkProbe(chkProbe: number): EventForensicInfoStackForensic {
        this['chk_probe'] = chkProbe;
        return this;
    }
    public set chkProbe(chkProbe: number  | undefined) {
        this['chk_probe'] = chkProbe;
    }
    public get chkProbe(): number | undefined {
        return this['chk_probe'];
    }
    public withChkRule(chkRule: number): EventForensicInfoStackForensic {
        this['chk_rule'] = chkRule;
        return this;
    }
    public set chkRule(chkRule: number  | undefined) {
        this['chk_rule'] = chkRule;
    }
    public get chkRule(): number | undefined {
        return this['chk_rule'];
    }
    public withPluginName(pluginName: number): EventForensicInfoStackForensic {
        this['plugin_name'] = pluginName;
        return this;
    }
    public set pluginName(pluginName: number  | undefined) {
        this['plugin_name'] = pluginName;
    }
    public get pluginName(): number | undefined {
        return this['plugin_name'];
    }
}