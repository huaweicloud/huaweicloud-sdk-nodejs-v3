
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListThreatsResponse extends SdkResponse {
    public xss?: number;
    public sqli?: number;
    public cmdi?: number;
    public lfi?: number;
    public rfi?: number;
    public webshell?: number;
    public robot?: number;
    public cc?: number;
    public custom?: number;
    public whiteblackip?: number;
    public antileakage?: number;
    public antitamper?: number;
    private 'llm_prompt_injection'?: number;
    private 'llm_prompt_sensitive'?: number;
    private 'llm_response_sensitive'?: number;
    public constructor() { 
        super();
    }
    public withXss(xss: number): ListThreatsResponse {
        this['xss'] = xss;
        return this;
    }
    public withSqli(sqli: number): ListThreatsResponse {
        this['sqli'] = sqli;
        return this;
    }
    public withCmdi(cmdi: number): ListThreatsResponse {
        this['cmdi'] = cmdi;
        return this;
    }
    public withLfi(lfi: number): ListThreatsResponse {
        this['lfi'] = lfi;
        return this;
    }
    public withRfi(rfi: number): ListThreatsResponse {
        this['rfi'] = rfi;
        return this;
    }
    public withWebshell(webshell: number): ListThreatsResponse {
        this['webshell'] = webshell;
        return this;
    }
    public withRobot(robot: number): ListThreatsResponse {
        this['robot'] = robot;
        return this;
    }
    public withCc(cc: number): ListThreatsResponse {
        this['cc'] = cc;
        return this;
    }
    public withCustom(custom: number): ListThreatsResponse {
        this['custom'] = custom;
        return this;
    }
    public withWhiteblackip(whiteblackip: number): ListThreatsResponse {
        this['whiteblackip'] = whiteblackip;
        return this;
    }
    public withAntileakage(antileakage: number): ListThreatsResponse {
        this['antileakage'] = antileakage;
        return this;
    }
    public withAntitamper(antitamper: number): ListThreatsResponse {
        this['antitamper'] = antitamper;
        return this;
    }
    public withLlmPromptInjection(llmPromptInjection: number): ListThreatsResponse {
        this['llm_prompt_injection'] = llmPromptInjection;
        return this;
    }
    public set llmPromptInjection(llmPromptInjection: number  | undefined) {
        this['llm_prompt_injection'] = llmPromptInjection;
    }
    public get llmPromptInjection(): number | undefined {
        return this['llm_prompt_injection'];
    }
    public withLlmPromptSensitive(llmPromptSensitive: number): ListThreatsResponse {
        this['llm_prompt_sensitive'] = llmPromptSensitive;
        return this;
    }
    public set llmPromptSensitive(llmPromptSensitive: number  | undefined) {
        this['llm_prompt_sensitive'] = llmPromptSensitive;
    }
    public get llmPromptSensitive(): number | undefined {
        return this['llm_prompt_sensitive'];
    }
    public withLlmResponseSensitive(llmResponseSensitive: number): ListThreatsResponse {
        this['llm_response_sensitive'] = llmResponseSensitive;
        return this;
    }
    public set llmResponseSensitive(llmResponseSensitive: number  | undefined) {
        this['llm_response_sensitive'] = llmResponseSensitive;
    }
    public get llmResponseSensitive(): number | undefined {
        return this['llm_response_sensitive'];
    }
}