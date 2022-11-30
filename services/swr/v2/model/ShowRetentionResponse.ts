import { Rule } from './Rule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRetentionResponse extends SdkResponse {
    public algorithm?: string;
    public id?: number;
    public rules?: Array<Rule>;
    public scope?: string;
    public constructor() { 
        super();
    }
    public withAlgorithm(algorithm: string): ShowRetentionResponse {
        this['algorithm'] = algorithm;
        return this;
    }
    public withId(id: number): ShowRetentionResponse {
        this['id'] = id;
        return this;
    }
    public withRules(rules: Array<Rule>): ShowRetentionResponse {
        this['rules'] = rules;
        return this;
    }
    public withScope(scope: string): ShowRetentionResponse {
        this['scope'] = scope;
        return this;
    }
}