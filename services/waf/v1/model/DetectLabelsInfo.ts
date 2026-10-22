import { LabelInfo } from './LabelInfo';


export class DetectLabelsInfo {
    private 'compliance_labels_info'?: Array<LabelInfo>;
    private 'inject_labels_info'?: Array<LabelInfo>;
    private 'immunity_lexicon_labels_info'?: Array<LabelInfo>;
    private 'lexicon_labels_info'?: Array<LabelInfo>;
    private 'lexicon_internal_labels_info'?: Array<LabelInfo>;
    private 'supported_language_labels'?: Array<LabelInfo>;
    private 'pii_labels_info'?: Array<LabelInfo>;
    public constructor() { 
    }
    public withComplianceLabelsInfo(complianceLabelsInfo: Array<LabelInfo>): DetectLabelsInfo {
        this['compliance_labels_info'] = complianceLabelsInfo;
        return this;
    }
    public set complianceLabelsInfo(complianceLabelsInfo: Array<LabelInfo>  | undefined) {
        this['compliance_labels_info'] = complianceLabelsInfo;
    }
    public get complianceLabelsInfo(): Array<LabelInfo> | undefined {
        return this['compliance_labels_info'];
    }
    public withInjectLabelsInfo(injectLabelsInfo: Array<LabelInfo>): DetectLabelsInfo {
        this['inject_labels_info'] = injectLabelsInfo;
        return this;
    }
    public set injectLabelsInfo(injectLabelsInfo: Array<LabelInfo>  | undefined) {
        this['inject_labels_info'] = injectLabelsInfo;
    }
    public get injectLabelsInfo(): Array<LabelInfo> | undefined {
        return this['inject_labels_info'];
    }
    public withImmunityLexiconLabelsInfo(immunityLexiconLabelsInfo: Array<LabelInfo>): DetectLabelsInfo {
        this['immunity_lexicon_labels_info'] = immunityLexiconLabelsInfo;
        return this;
    }
    public set immunityLexiconLabelsInfo(immunityLexiconLabelsInfo: Array<LabelInfo>  | undefined) {
        this['immunity_lexicon_labels_info'] = immunityLexiconLabelsInfo;
    }
    public get immunityLexiconLabelsInfo(): Array<LabelInfo> | undefined {
        return this['immunity_lexicon_labels_info'];
    }
    public withLexiconLabelsInfo(lexiconLabelsInfo: Array<LabelInfo>): DetectLabelsInfo {
        this['lexicon_labels_info'] = lexiconLabelsInfo;
        return this;
    }
    public set lexiconLabelsInfo(lexiconLabelsInfo: Array<LabelInfo>  | undefined) {
        this['lexicon_labels_info'] = lexiconLabelsInfo;
    }
    public get lexiconLabelsInfo(): Array<LabelInfo> | undefined {
        return this['lexicon_labels_info'];
    }
    public withLexiconInternalLabelsInfo(lexiconInternalLabelsInfo: Array<LabelInfo>): DetectLabelsInfo {
        this['lexicon_internal_labels_info'] = lexiconInternalLabelsInfo;
        return this;
    }
    public set lexiconInternalLabelsInfo(lexiconInternalLabelsInfo: Array<LabelInfo>  | undefined) {
        this['lexicon_internal_labels_info'] = lexiconInternalLabelsInfo;
    }
    public get lexiconInternalLabelsInfo(): Array<LabelInfo> | undefined {
        return this['lexicon_internal_labels_info'];
    }
    public withSupportedLanguageLabels(supportedLanguageLabels: Array<LabelInfo>): DetectLabelsInfo {
        this['supported_language_labels'] = supportedLanguageLabels;
        return this;
    }
    public set supportedLanguageLabels(supportedLanguageLabels: Array<LabelInfo>  | undefined) {
        this['supported_language_labels'] = supportedLanguageLabels;
    }
    public get supportedLanguageLabels(): Array<LabelInfo> | undefined {
        return this['supported_language_labels'];
    }
    public withPiiLabelsInfo(piiLabelsInfo: Array<LabelInfo>): DetectLabelsInfo {
        this['pii_labels_info'] = piiLabelsInfo;
        return this;
    }
    public set piiLabelsInfo(piiLabelsInfo: Array<LabelInfo>  | undefined) {
        this['pii_labels_info'] = piiLabelsInfo;
    }
    public get piiLabelsInfo(): Array<LabelInfo> | undefined {
        return this['pii_labels_info'];
    }
}