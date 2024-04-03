

export class TextCompletionReq {
    public prompt?: string;
    public user?: string;
    public stream?: boolean;
    public temperature?: number;
    private 'top_p'?: number;
    private 'max_tokens'?: number;
    public n?: number;
    private 'presence_penalty'?: number;
    private 'frequency_penalty'?: number;
    public constructor(prompt?: string) { 
        this['prompt'] = prompt;
    }
    public withPrompt(prompt: string): TextCompletionReq {
        this['prompt'] = prompt;
        return this;
    }
    public withUser(user: string): TextCompletionReq {
        this['user'] = user;
        return this;
    }
    public withStream(stream: boolean): TextCompletionReq {
        this['stream'] = stream;
        return this;
    }
    public withTemperature(temperature: number): TextCompletionReq {
        this['temperature'] = temperature;
        return this;
    }
    public withTopP(topP: number): TextCompletionReq {
        this['top_p'] = topP;
        return this;
    }
    public set topP(topP: number  | undefined) {
        this['top_p'] = topP;
    }
    public get topP(): number | undefined {
        return this['top_p'];
    }
    public withMaxTokens(maxTokens: number): TextCompletionReq {
        this['max_tokens'] = maxTokens;
        return this;
    }
    public set maxTokens(maxTokens: number  | undefined) {
        this['max_tokens'] = maxTokens;
    }
    public get maxTokens(): number | undefined {
        return this['max_tokens'];
    }
    public withN(n: number): TextCompletionReq {
        this['n'] = n;
        return this;
    }
    public withPresencePenalty(presencePenalty: number): TextCompletionReq {
        this['presence_penalty'] = presencePenalty;
        return this;
    }
    public set presencePenalty(presencePenalty: number  | undefined) {
        this['presence_penalty'] = presencePenalty;
    }
    public get presencePenalty(): number | undefined {
        return this['presence_penalty'];
    }
    public withFrequencyPenalty(frequencyPenalty: number): TextCompletionReq {
        this['frequency_penalty'] = frequencyPenalty;
        return this;
    }
    public set frequencyPenalty(frequencyPenalty: number  | undefined) {
        this['frequency_penalty'] = frequencyPenalty;
    }
    public get frequencyPenalty(): number | undefined {
        return this['frequency_penalty'];
    }
}