import { LiveShootScriptItem } from './LiveShootScriptItem';


export class LanguageCheckInfoReq {
    private 'target_language'?: string;
    private 'shoot_script'?: Array<LiveShootScriptItem>;
    public constructor(targetLanguage?: string, shootScript?: Array<LiveShootScriptItem>) { 
        this['target_language'] = targetLanguage;
        this['shoot_script'] = shootScript;
    }
    public withTargetLanguage(targetLanguage: string): LanguageCheckInfoReq {
        this['target_language'] = targetLanguage;
        return this;
    }
    public set targetLanguage(targetLanguage: string  | undefined) {
        this['target_language'] = targetLanguage;
    }
    public get targetLanguage(): string | undefined {
        return this['target_language'];
    }
    public withShootScript(shootScript: Array<LiveShootScriptItem>): LanguageCheckInfoReq {
        this['shoot_script'] = shootScript;
        return this;
    }
    public set shootScript(shootScript: Array<LiveShootScriptItem>  | undefined) {
        this['shoot_script'] = shootScript;
    }
    public get shootScript(): Array<LiveShootScriptItem> | undefined {
        return this['shoot_script'];
    }
}