import { AiGuardRuleAction } from './AiGuardRuleAction';


export class CreateAiguardTemplateRuleRequestBody {
    private 'template_id'?: string;
    public name?: string;
    public action?: AiGuardRuleAction;
    public status?: CreateAiguardTemplateRuleRequestBodyStatusEnum | string;
    private 'supported_language_labels'?: Array<string>;
    private 'not_supported_language_action'?: CreateAiguardTemplateRuleRequestBodyNotSupportedLanguageActionEnum | string;
    private 'custom_answers_id'?: string;
    private 'custom_answers_name'?: string;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): CreateAiguardTemplateRuleRequestBody {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withName(name: string): CreateAiguardTemplateRuleRequestBody {
        this['name'] = name;
        return this;
    }
    public withAction(action: AiGuardRuleAction): CreateAiguardTemplateRuleRequestBody {
        this['action'] = action;
        return this;
    }
    public withStatus(status: CreateAiguardTemplateRuleRequestBodyStatusEnum | string): CreateAiguardTemplateRuleRequestBody {
        this['status'] = status;
        return this;
    }
    public withSupportedLanguageLabels(supportedLanguageLabels: Array<string>): CreateAiguardTemplateRuleRequestBody {
        this['supported_language_labels'] = supportedLanguageLabels;
        return this;
    }
    public set supportedLanguageLabels(supportedLanguageLabels: Array<string>  | undefined) {
        this['supported_language_labels'] = supportedLanguageLabels;
    }
    public get supportedLanguageLabels(): Array<string> | undefined {
        return this['supported_language_labels'];
    }
    public withNotSupportedLanguageAction(notSupportedLanguageAction: CreateAiguardTemplateRuleRequestBodyNotSupportedLanguageActionEnum | string): CreateAiguardTemplateRuleRequestBody {
        this['not_supported_language_action'] = notSupportedLanguageAction;
        return this;
    }
    public set notSupportedLanguageAction(notSupportedLanguageAction: CreateAiguardTemplateRuleRequestBodyNotSupportedLanguageActionEnum | string  | undefined) {
        this['not_supported_language_action'] = notSupportedLanguageAction;
    }
    public get notSupportedLanguageAction(): CreateAiguardTemplateRuleRequestBodyNotSupportedLanguageActionEnum | string | undefined {
        return this['not_supported_language_action'];
    }
    public withCustomAnswersId(customAnswersId: string): CreateAiguardTemplateRuleRequestBody {
        this['custom_answers_id'] = customAnswersId;
        return this;
    }
    public set customAnswersId(customAnswersId: string  | undefined) {
        this['custom_answers_id'] = customAnswersId;
    }
    public get customAnswersId(): string | undefined {
        return this['custom_answers_id'];
    }
    public withCustomAnswersName(customAnswersName: string): CreateAiguardTemplateRuleRequestBody {
        this['custom_answers_name'] = customAnswersName;
        return this;
    }
    public set customAnswersName(customAnswersName: string  | undefined) {
        this['custom_answers_name'] = customAnswersName;
    }
    public get customAnswersName(): string | undefined {
        return this['custom_answers_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAiguardTemplateRuleRequestBodyStatusEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateAiguardTemplateRuleRequestBodyNotSupportedLanguageActionEnum {
    PASS = 'pass',
    BLOCK = 'block'
}
