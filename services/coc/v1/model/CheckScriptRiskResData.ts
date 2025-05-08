import { CheckScriptRiskResDataBlacklistCommands } from './CheckScriptRiskResDataBlacklistCommands';


export class CheckScriptRiskResData {
    private 'risk_level'?: string;
    private 'blacklist_commands'?: Array<CheckScriptRiskResDataBlacklistCommands>;
    public constructor(riskLevel?: string) { 
        this['risk_level'] = riskLevel;
    }
    public withRiskLevel(riskLevel: string): CheckScriptRiskResData {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withBlacklistCommands(blacklistCommands: Array<CheckScriptRiskResDataBlacklistCommands>): CheckScriptRiskResData {
        this['blacklist_commands'] = blacklistCommands;
        return this;
    }
    public set blacklistCommands(blacklistCommands: Array<CheckScriptRiskResDataBlacklistCommands>  | undefined) {
        this['blacklist_commands'] = blacklistCommands;
    }
    public get blacklistCommands(): Array<CheckScriptRiskResDataBlacklistCommands> | undefined {
        return this['blacklist_commands'];
    }
}