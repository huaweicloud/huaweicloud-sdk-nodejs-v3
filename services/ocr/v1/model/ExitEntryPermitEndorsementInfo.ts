

export class ExitEntryPermitEndorsementInfo {
    private 'endorsement_type'?: string | undefined;
    private 'valid_round_trips'?: string | undefined;
    private 'endorsement_valid_period'?: string | undefined;
    public remark?: string;
    private 'issue_info'?: string | undefined;
    public constructor() { 
    }
    public withEndorsementType(endorsementType: string): ExitEntryPermitEndorsementInfo {
        this['endorsement_type'] = endorsementType;
        return this;
    }
    public set endorsementType(endorsementType: string | undefined) {
        this['endorsement_type'] = endorsementType;
    }
    public get endorsementType() {
        return this['endorsement_type'];
    }
    public withValidRoundTrips(validRoundTrips: string): ExitEntryPermitEndorsementInfo {
        this['valid_round_trips'] = validRoundTrips;
        return this;
    }
    public set validRoundTrips(validRoundTrips: string | undefined) {
        this['valid_round_trips'] = validRoundTrips;
    }
    public get validRoundTrips() {
        return this['valid_round_trips'];
    }
    public withEndorsementValidPeriod(endorsementValidPeriod: string): ExitEntryPermitEndorsementInfo {
        this['endorsement_valid_period'] = endorsementValidPeriod;
        return this;
    }
    public set endorsementValidPeriod(endorsementValidPeriod: string | undefined) {
        this['endorsement_valid_period'] = endorsementValidPeriod;
    }
    public get endorsementValidPeriod() {
        return this['endorsement_valid_period'];
    }
    public withRemark(remark: string): ExitEntryPermitEndorsementInfo {
        this['remark'] = remark;
        return this;
    }
    public withIssueInfo(issueInfo: string): ExitEntryPermitEndorsementInfo {
        this['issue_info'] = issueInfo;
        return this;
    }
    public set issueInfo(issueInfo: string | undefined) {
        this['issue_info'] = issueInfo;
    }
    public get issueInfo() {
        return this['issue_info'];
    }
}