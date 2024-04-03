import { CompletionUsage } from './CompletionUsage';
import { TextChoice } from './TextChoice';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteTextCompletionResponse extends SdkResponse {
    public id?: string;
    public created?: number;
    public choices?: Array<TextChoice>;
    public usage?: CompletionUsage;
    public constructor() { 
        super();
    }
    public withId(id: string): ExecuteTextCompletionResponse {
        this['id'] = id;
        return this;
    }
    public withCreated(created: number): ExecuteTextCompletionResponse {
        this['created'] = created;
        return this;
    }
    public withChoices(choices: Array<TextChoice>): ExecuteTextCompletionResponse {
        this['choices'] = choices;
        return this;
    }
    public withUsage(usage: CompletionUsage): ExecuteTextCompletionResponse {
        this['usage'] = usage;
        return this;
    }
}