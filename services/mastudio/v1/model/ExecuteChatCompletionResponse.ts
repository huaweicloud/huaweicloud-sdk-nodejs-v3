import { ChatChoice } from './ChatChoice';
import { CompletionUsage } from './CompletionUsage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteChatCompletionResponse extends SdkResponse {
    public id?: string;
    public created?: number;
    public choices?: Array<ChatChoice>;
    public usage?: CompletionUsage;
    public constructor() { 
        super();
    }
    public withId(id: string): ExecuteChatCompletionResponse {
        this['id'] = id;
        return this;
    }
    public withCreated(created: number): ExecuteChatCompletionResponse {
        this['created'] = created;
        return this;
    }
    public withChoices(choices: Array<ChatChoice>): ExecuteChatCompletionResponse {
        this['choices'] = choices;
        return this;
    }
    public withUsage(usage: CompletionUsage): ExecuteChatCompletionResponse {
        this['usage'] = usage;
        return this;
    }
}