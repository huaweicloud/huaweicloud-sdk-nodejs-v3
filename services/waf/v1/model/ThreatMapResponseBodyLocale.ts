

export class ThreatMapResponseBodyLocale {
    public cmdi?: string;
    private 'llm_prompt_injection'?: string;
    public anticrawler?: string;
    private 'custom_custom'?: string;
    private 'third_bot_river'?: string;
    public robot?: string;
    private 'custom_idc_ip'?: string;
    private 'antiscan_dir_traversal'?: string;
    private 'advanced_bot'?: string;
    public xss?: string;
    private 'antiscan_high_freq_scan'?: string;
    public webshell?: string;
    public cc?: string;
    public botm?: string;
    public illegal?: string;
    private 'llm_prompt_sensitive'?: string;
    public sqli?: string;
    public lfi?: string;
    public antitamper?: string;
    private 'custom_geoip'?: string;
    public rfi?: string;
    public vuln?: string;
    private 'llm_response_sensitive'?: string;
    private 'custom_whiteblackip'?: string;
    public leakage?: string;
    public constructor() { 
    }
    public withCmdi(cmdi: string): ThreatMapResponseBodyLocale {
        this['cmdi'] = cmdi;
        return this;
    }
    public withLlmPromptInjection(llmPromptInjection: string): ThreatMapResponseBodyLocale {
        this['llm_prompt_injection'] = llmPromptInjection;
        return this;
    }
    public set llmPromptInjection(llmPromptInjection: string  | undefined) {
        this['llm_prompt_injection'] = llmPromptInjection;
    }
    public get llmPromptInjection(): string | undefined {
        return this['llm_prompt_injection'];
    }
    public withAnticrawler(anticrawler: string): ThreatMapResponseBodyLocale {
        this['anticrawler'] = anticrawler;
        return this;
    }
    public withCustomCustom(customCustom: string): ThreatMapResponseBodyLocale {
        this['custom_custom'] = customCustom;
        return this;
    }
    public set customCustom(customCustom: string  | undefined) {
        this['custom_custom'] = customCustom;
    }
    public get customCustom(): string | undefined {
        return this['custom_custom'];
    }
    public withThirdBotRiver(thirdBotRiver: string): ThreatMapResponseBodyLocale {
        this['third_bot_river'] = thirdBotRiver;
        return this;
    }
    public set thirdBotRiver(thirdBotRiver: string  | undefined) {
        this['third_bot_river'] = thirdBotRiver;
    }
    public get thirdBotRiver(): string | undefined {
        return this['third_bot_river'];
    }
    public withRobot(robot: string): ThreatMapResponseBodyLocale {
        this['robot'] = robot;
        return this;
    }
    public withCustomIdcIp(customIdcIp: string): ThreatMapResponseBodyLocale {
        this['custom_idc_ip'] = customIdcIp;
        return this;
    }
    public set customIdcIp(customIdcIp: string  | undefined) {
        this['custom_idc_ip'] = customIdcIp;
    }
    public get customIdcIp(): string | undefined {
        return this['custom_idc_ip'];
    }
    public withAntiscanDirTraversal(antiscanDirTraversal: string): ThreatMapResponseBodyLocale {
        this['antiscan_dir_traversal'] = antiscanDirTraversal;
        return this;
    }
    public set antiscanDirTraversal(antiscanDirTraversal: string  | undefined) {
        this['antiscan_dir_traversal'] = antiscanDirTraversal;
    }
    public get antiscanDirTraversal(): string | undefined {
        return this['antiscan_dir_traversal'];
    }
    public withAdvancedBot(advancedBot: string): ThreatMapResponseBodyLocale {
        this['advanced_bot'] = advancedBot;
        return this;
    }
    public set advancedBot(advancedBot: string  | undefined) {
        this['advanced_bot'] = advancedBot;
    }
    public get advancedBot(): string | undefined {
        return this['advanced_bot'];
    }
    public withXss(xss: string): ThreatMapResponseBodyLocale {
        this['xss'] = xss;
        return this;
    }
    public withAntiscanHighFreqScan(antiscanHighFreqScan: string): ThreatMapResponseBodyLocale {
        this['antiscan_high_freq_scan'] = antiscanHighFreqScan;
        return this;
    }
    public set antiscanHighFreqScan(antiscanHighFreqScan: string  | undefined) {
        this['antiscan_high_freq_scan'] = antiscanHighFreqScan;
    }
    public get antiscanHighFreqScan(): string | undefined {
        return this['antiscan_high_freq_scan'];
    }
    public withWebshell(webshell: string): ThreatMapResponseBodyLocale {
        this['webshell'] = webshell;
        return this;
    }
    public withCc(cc: string): ThreatMapResponseBodyLocale {
        this['cc'] = cc;
        return this;
    }
    public withBotm(botm: string): ThreatMapResponseBodyLocale {
        this['botm'] = botm;
        return this;
    }
    public withIllegal(illegal: string): ThreatMapResponseBodyLocale {
        this['illegal'] = illegal;
        return this;
    }
    public withLlmPromptSensitive(llmPromptSensitive: string): ThreatMapResponseBodyLocale {
        this['llm_prompt_sensitive'] = llmPromptSensitive;
        return this;
    }
    public set llmPromptSensitive(llmPromptSensitive: string  | undefined) {
        this['llm_prompt_sensitive'] = llmPromptSensitive;
    }
    public get llmPromptSensitive(): string | undefined {
        return this['llm_prompt_sensitive'];
    }
    public withSqli(sqli: string): ThreatMapResponseBodyLocale {
        this['sqli'] = sqli;
        return this;
    }
    public withLfi(lfi: string): ThreatMapResponseBodyLocale {
        this['lfi'] = lfi;
        return this;
    }
    public withAntitamper(antitamper: string): ThreatMapResponseBodyLocale {
        this['antitamper'] = antitamper;
        return this;
    }
    public withCustomGeoip(customGeoip: string): ThreatMapResponseBodyLocale {
        this['custom_geoip'] = customGeoip;
        return this;
    }
    public set customGeoip(customGeoip: string  | undefined) {
        this['custom_geoip'] = customGeoip;
    }
    public get customGeoip(): string | undefined {
        return this['custom_geoip'];
    }
    public withRfi(rfi: string): ThreatMapResponseBodyLocale {
        this['rfi'] = rfi;
        return this;
    }
    public withVuln(vuln: string): ThreatMapResponseBodyLocale {
        this['vuln'] = vuln;
        return this;
    }
    public withLlmResponseSensitive(llmResponseSensitive: string): ThreatMapResponseBodyLocale {
        this['llm_response_sensitive'] = llmResponseSensitive;
        return this;
    }
    public set llmResponseSensitive(llmResponseSensitive: string  | undefined) {
        this['llm_response_sensitive'] = llmResponseSensitive;
    }
    public get llmResponseSensitive(): string | undefined {
        return this['llm_response_sensitive'];
    }
    public withCustomWhiteblackip(customWhiteblackip: string): ThreatMapResponseBodyLocale {
        this['custom_whiteblackip'] = customWhiteblackip;
        return this;
    }
    public set customWhiteblackip(customWhiteblackip: string  | undefined) {
        this['custom_whiteblackip'] = customWhiteblackip;
    }
    public get customWhiteblackip(): string | undefined {
        return this['custom_whiteblackip'];
    }
    public withLeakage(leakage: string): ThreatMapResponseBodyLocale {
        this['leakage'] = leakage;
        return this;
    }
}