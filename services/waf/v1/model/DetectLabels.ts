

export class DetectLabels {
    private 'compliance_labels'?: Array<string>;
    private 'inject_labels'?: Array<string>;
    private 'immunity_lexicon_labels'?: Array<string>;
    private 'lexicon_labels'?: Array<string>;
    private 'lexicon_internal_labels'?: Array<string>;
    private 'supported_language_labels'?: Array<string>;
    private 'pii_labels'?: Array<string>;
    public constructor() { 
    }
    public withComplianceLabels(complianceLabels: Array<string>): DetectLabels {
        this['compliance_labels'] = complianceLabels;
        return this;
    }
    public set complianceLabels(complianceLabels: Array<string>  | undefined) {
        this['compliance_labels'] = complianceLabels;
    }
    public get complianceLabels(): Array<string> | undefined {
        return this['compliance_labels'];
    }
    public withInjectLabels(injectLabels: Array<string>): DetectLabels {
        this['inject_labels'] = injectLabels;
        return this;
    }
    public set injectLabels(injectLabels: Array<string>  | undefined) {
        this['inject_labels'] = injectLabels;
    }
    public get injectLabels(): Array<string> | undefined {
        return this['inject_labels'];
    }
    public withImmunityLexiconLabels(immunityLexiconLabels: Array<string>): DetectLabels {
        this['immunity_lexicon_labels'] = immunityLexiconLabels;
        return this;
    }
    public set immunityLexiconLabels(immunityLexiconLabels: Array<string>  | undefined) {
        this['immunity_lexicon_labels'] = immunityLexiconLabels;
    }
    public get immunityLexiconLabels(): Array<string> | undefined {
        return this['immunity_lexicon_labels'];
    }
    public withLexiconLabels(lexiconLabels: Array<string>): DetectLabels {
        this['lexicon_labels'] = lexiconLabels;
        return this;
    }
    public set lexiconLabels(lexiconLabels: Array<string>  | undefined) {
        this['lexicon_labels'] = lexiconLabels;
    }
    public get lexiconLabels(): Array<string> | undefined {
        return this['lexicon_labels'];
    }
    public withLexiconInternalLabels(lexiconInternalLabels: Array<string>): DetectLabels {
        this['lexicon_internal_labels'] = lexiconInternalLabels;
        return this;
    }
    public set lexiconInternalLabels(lexiconInternalLabels: Array<string>  | undefined) {
        this['lexicon_internal_labels'] = lexiconInternalLabels;
    }
    public get lexiconInternalLabels(): Array<string> | undefined {
        return this['lexicon_internal_labels'];
    }
    public withSupportedLanguageLabels(supportedLanguageLabels: Array<string>): DetectLabels {
        this['supported_language_labels'] = supportedLanguageLabels;
        return this;
    }
    public set supportedLanguageLabels(supportedLanguageLabels: Array<string>  | undefined) {
        this['supported_language_labels'] = supportedLanguageLabels;
    }
    public get supportedLanguageLabels(): Array<string> | undefined {
        return this['supported_language_labels'];
    }
    public withPiiLabels(piiLabels: Array<string>): DetectLabels {
        this['pii_labels'] = piiLabels;
        return this;
    }
    public set piiLabels(piiLabels: Array<string>  | undefined) {
        this['pii_labels'] = piiLabels;
    }
    public get piiLabels(): Array<string> | undefined {
        return this['pii_labels'];
    }
}