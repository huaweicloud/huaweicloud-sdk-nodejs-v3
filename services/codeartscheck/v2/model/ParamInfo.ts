

export class ParamInfo {
    public url?: string;
    public branch?: string;
    public language?: string;
    private 'exclude_dir'?: string;
    public encode?: string;
    private 'compile_config'?: string;
    private 'rule_template'?: string;
    public constructor() { 
    }
    public withUrl(url: string): ParamInfo {
        this['url'] = url;
        return this;
    }
    public withBranch(branch: string): ParamInfo {
        this['branch'] = branch;
        return this;
    }
    public withLanguage(language: string): ParamInfo {
        this['language'] = language;
        return this;
    }
    public withExcludeDir(excludeDir: string): ParamInfo {
        this['exclude_dir'] = excludeDir;
        return this;
    }
    public set excludeDir(excludeDir: string  | undefined) {
        this['exclude_dir'] = excludeDir;
    }
    public get excludeDir(): string | undefined {
        return this['exclude_dir'];
    }
    public withEncode(encode: string): ParamInfo {
        this['encode'] = encode;
        return this;
    }
    public withCompileConfig(compileConfig: string): ParamInfo {
        this['compile_config'] = compileConfig;
        return this;
    }
    public set compileConfig(compileConfig: string  | undefined) {
        this['compile_config'] = compileConfig;
    }
    public get compileConfig(): string | undefined {
        return this['compile_config'];
    }
    public withRuleTemplate(ruleTemplate: string): ParamInfo {
        this['rule_template'] = ruleTemplate;
        return this;
    }
    public set ruleTemplate(ruleTemplate: string  | undefined) {
        this['rule_template'] = ruleTemplate;
    }
    public get ruleTemplate(): string | undefined {
        return this['rule_template'];
    }
}