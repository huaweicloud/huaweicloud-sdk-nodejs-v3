

export class CheckScriptRiskResDataBlacklistCommands {
    private 'command_name'?: string;
    private 'command_rule'?: string;
    public example?: string;
    private 'description_en'?: string;
    private 'description_zh'?: string;
    public constructor() { 
    }
    public withCommandName(commandName: string): CheckScriptRiskResDataBlacklistCommands {
        this['command_name'] = commandName;
        return this;
    }
    public set commandName(commandName: string  | undefined) {
        this['command_name'] = commandName;
    }
    public get commandName(): string | undefined {
        return this['command_name'];
    }
    public withCommandRule(commandRule: string): CheckScriptRiskResDataBlacklistCommands {
        this['command_rule'] = commandRule;
        return this;
    }
    public set commandRule(commandRule: string  | undefined) {
        this['command_rule'] = commandRule;
    }
    public get commandRule(): string | undefined {
        return this['command_rule'];
    }
    public withExample(example: string): CheckScriptRiskResDataBlacklistCommands {
        this['example'] = example;
        return this;
    }
    public withDescriptionEn(descriptionEn: string): CheckScriptRiskResDataBlacklistCommands {
        this['description_en'] = descriptionEn;
        return this;
    }
    public set descriptionEn(descriptionEn: string  | undefined) {
        this['description_en'] = descriptionEn;
    }
    public get descriptionEn(): string | undefined {
        return this['description_en'];
    }
    public withDescriptionZh(descriptionZh: string): CheckScriptRiskResDataBlacklistCommands {
        this['description_zh'] = descriptionZh;
        return this;
    }
    public set descriptionZh(descriptionZh: string  | undefined) {
        this['description_zh'] = descriptionZh;
    }
    public get descriptionZh(): string | undefined {
        return this['description_zh'];
    }
}