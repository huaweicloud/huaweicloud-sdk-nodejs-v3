import { SmnTargetDetailSubjectTransform } from './SmnTargetDetailSubjectTransform';


export class SmnTargetDetail {
    public urn?: string;
    private 'agency_name'?: string;
    private 'subject_transform'?: SmnTargetDetailSubjectTransform;
    public constructor(urn?: string, agencyName?: string) { 
        this['urn'] = urn;
        this['agency_name'] = agencyName;
    }
    public withUrn(urn: string): SmnTargetDetail {
        this['urn'] = urn;
        return this;
    }
    public withAgencyName(agencyName: string): SmnTargetDetail {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
    public withSubjectTransform(subjectTransform: SmnTargetDetailSubjectTransform): SmnTargetDetail {
        this['subject_transform'] = subjectTransform;
        return this;
    }
    public set subjectTransform(subjectTransform: SmnTargetDetailSubjectTransform  | undefined) {
        this['subject_transform'] = subjectTransform;
    }
    public get subjectTransform(): SmnTargetDetailSubjectTransform | undefined {
        return this['subject_transform'];
    }
}