import { Location } from './Location';


export class ValidatePolicyFinding {
    private 'finding_details'?: string;
    private 'finding_type'?: ValidatePolicyFindingFindingTypeEnum | string;
    private 'issue_code'?: string;
    private 'learn_more_link'?: string;
    public locations?: Array<Location>;
    public constructor(findingDetails?: string, findingType?: string, issueCode?: string, learnMoreLink?: string, locations?: Array<Location>) { 
        this['finding_details'] = findingDetails;
        this['finding_type'] = findingType;
        this['issue_code'] = issueCode;
        this['learn_more_link'] = learnMoreLink;
        this['locations'] = locations;
    }
    public withFindingDetails(findingDetails: string): ValidatePolicyFinding {
        this['finding_details'] = findingDetails;
        return this;
    }
    public set findingDetails(findingDetails: string  | undefined) {
        this['finding_details'] = findingDetails;
    }
    public get findingDetails(): string | undefined {
        return this['finding_details'];
    }
    public withFindingType(findingType: ValidatePolicyFindingFindingTypeEnum | string): ValidatePolicyFinding {
        this['finding_type'] = findingType;
        return this;
    }
    public set findingType(findingType: ValidatePolicyFindingFindingTypeEnum | string  | undefined) {
        this['finding_type'] = findingType;
    }
    public get findingType(): ValidatePolicyFindingFindingTypeEnum | string | undefined {
        return this['finding_type'];
    }
    public withIssueCode(issueCode: string): ValidatePolicyFinding {
        this['issue_code'] = issueCode;
        return this;
    }
    public set issueCode(issueCode: string  | undefined) {
        this['issue_code'] = issueCode;
    }
    public get issueCode(): string | undefined {
        return this['issue_code'];
    }
    public withLearnMoreLink(learnMoreLink: string): ValidatePolicyFinding {
        this['learn_more_link'] = learnMoreLink;
        return this;
    }
    public set learnMoreLink(learnMoreLink: string  | undefined) {
        this['learn_more_link'] = learnMoreLink;
    }
    public get learnMoreLink(): string | undefined {
        return this['learn_more_link'];
    }
    public withLocations(locations: Array<Location>): ValidatePolicyFinding {
        this['locations'] = locations;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ValidatePolicyFindingFindingTypeEnum {
    SECURITY_WARNING = 'security_warning',
    ERROR = 'error',
    WARNING = 'warning',
    SUGGESTION = 'suggestion'
}
