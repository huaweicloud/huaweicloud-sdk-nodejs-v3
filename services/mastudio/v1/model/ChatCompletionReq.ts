import { Message } from './Message';


export class ChatCompletionReq {
    public messages?: Array<Message>;
    public user?: string;
    public stream?: boolean;
    public temperature?: number;
    private 'top_p'?: number;
    private 'max_tokens'?: number;
    public n?: number;
    private 'presence_penalty'?: number;
    private 'frequency_penalty'?: number;
    public constructor(messages?: Array<Message>) { 
        this['messages'] = messages;
    }
    public withMessages(messages: Array<Message>): ChatCompletionReq {
        this['messages'] = messages;
        return this;
    }
    public withUser(user: string): ChatCompletionReq {
        this['user'] = user;
        return this;
    }
    public withStream(stream: boolean): ChatCompletionReq {
        this['stream'] = stream;
        return this;
    }
    public withTemperature(temperature: number): ChatCompletionReq {
        this['temperature'] = temperature;
        return this;
    }
    public withTopP(topP: number): ChatCompletionReq {
        this['top_p'] = topP;
        return this;
    }
    public set topP(topP: number  | undefined) {
        this['top_p'] = topP;
    }
    public get topP(): number | undefined {
        return this['top_p'];
    }
    public withMaxTokens(maxTokens: number): ChatCompletionReq {
        this['max_tokens'] = maxTokens;
        return this;
    }
    public set maxTokens(maxTokens: number  | undefined) {
        this['max_tokens'] = maxTokens;
    }
    public get maxTokens(): number | undefined {
        return this['max_tokens'];
    }
    public withN(n: number): ChatCompletionReq {
        this['n'] = n;
        return this;
    }
    public withPresencePenalty(presencePenalty: number): ChatCompletionReq {
        this['presence_penalty'] = presencePenalty;
        return this;
    }
    public set presencePenalty(presencePenalty: number  | undefined) {
        this['presence_penalty'] = presencePenalty;
    }
    public get presencePenalty(): number | undefined {
        return this['presence_penalty'];
    }
    public withFrequencyPenalty(frequencyPenalty: number): ChatCompletionReq {
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