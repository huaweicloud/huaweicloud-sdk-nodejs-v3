
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecretFunctionTemplatesResponse extends SdkResponse {
    private 'function_templates'?: string;
    public constructor() { 
        super();
    }
    public withFunctionTemplates(functionTemplates: string): ShowSecretFunctionTemplatesResponse {
        this['function_templates'] = functionTemplates;
        return this;
    }
    public set functionTemplates(functionTemplates: string  | undefined) {
        this['function_templates'] = functionTemplates;
    }
    public get functionTemplates(): string | undefined {
        return this['function_templates'];
    }
}