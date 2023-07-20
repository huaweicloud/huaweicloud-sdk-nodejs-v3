import { QualificationCategory } from './QualificationCategory';
import { QualificationConfidence } from './QualificationConfidence';


export class QualificationCertificateResult {
    private 'id_number'?: string;
    private 'assessment_date'?: string;
    private 'certificate_number'?: string;
    private 'file_number'?: string;
    private 'union_card_number'?: string;
    private 'continuing_education_info'?: string;
    public sex?: string;
    private 'phone_number'?: string;
    private 'registration_date'?: string;
    private 'work_unit'?: string;
    private 'integrity_assessment_info'?: string;
    public nationality?: string;
    public name?: string;
    public address?: string;
    private 'driving_class'?: string;
    private 'issuing_authority'?: string;
    private 'birth_date'?: string;
    private 'qualification_category_list'?: Array<QualificationCategory>;
    public confidence?: QualificationConfidence;
    public constructor() { 
    }
    public withIdNumber(idNumber: string): QualificationCertificateResult {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: string  | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber(): string | undefined {
        return this['id_number'];
    }
    public withAssessmentDate(assessmentDate: string): QualificationCertificateResult {
        this['assessment_date'] = assessmentDate;
        return this;
    }
    public set assessmentDate(assessmentDate: string  | undefined) {
        this['assessment_date'] = assessmentDate;
    }
    public get assessmentDate(): string | undefined {
        return this['assessment_date'];
    }
    public withCertificateNumber(certificateNumber: string): QualificationCertificateResult {
        this['certificate_number'] = certificateNumber;
        return this;
    }
    public set certificateNumber(certificateNumber: string  | undefined) {
        this['certificate_number'] = certificateNumber;
    }
    public get certificateNumber(): string | undefined {
        return this['certificate_number'];
    }
    public withFileNumber(fileNumber: string): QualificationCertificateResult {
        this['file_number'] = fileNumber;
        return this;
    }
    public set fileNumber(fileNumber: string  | undefined) {
        this['file_number'] = fileNumber;
    }
    public get fileNumber(): string | undefined {
        return this['file_number'];
    }
    public withUnionCardNumber(unionCardNumber: string): QualificationCertificateResult {
        this['union_card_number'] = unionCardNumber;
        return this;
    }
    public set unionCardNumber(unionCardNumber: string  | undefined) {
        this['union_card_number'] = unionCardNumber;
    }
    public get unionCardNumber(): string | undefined {
        return this['union_card_number'];
    }
    public withContinuingEducationInfo(continuingEducationInfo: string): QualificationCertificateResult {
        this['continuing_education_info'] = continuingEducationInfo;
        return this;
    }
    public set continuingEducationInfo(continuingEducationInfo: string  | undefined) {
        this['continuing_education_info'] = continuingEducationInfo;
    }
    public get continuingEducationInfo(): string | undefined {
        return this['continuing_education_info'];
    }
    public withSex(sex: string): QualificationCertificateResult {
        this['sex'] = sex;
        return this;
    }
    public withPhoneNumber(phoneNumber: string): QualificationCertificateResult {
        this['phone_number'] = phoneNumber;
        return this;
    }
    public set phoneNumber(phoneNumber: string  | undefined) {
        this['phone_number'] = phoneNumber;
    }
    public get phoneNumber(): string | undefined {
        return this['phone_number'];
    }
    public withRegistrationDate(registrationDate: string): QualificationCertificateResult {
        this['registration_date'] = registrationDate;
        return this;
    }
    public set registrationDate(registrationDate: string  | undefined) {
        this['registration_date'] = registrationDate;
    }
    public get registrationDate(): string | undefined {
        return this['registration_date'];
    }
    public withWorkUnit(workUnit: string): QualificationCertificateResult {
        this['work_unit'] = workUnit;
        return this;
    }
    public set workUnit(workUnit: string  | undefined) {
        this['work_unit'] = workUnit;
    }
    public get workUnit(): string | undefined {
        return this['work_unit'];
    }
    public withIntegrityAssessmentInfo(integrityAssessmentInfo: string): QualificationCertificateResult {
        this['integrity_assessment_info'] = integrityAssessmentInfo;
        return this;
    }
    public set integrityAssessmentInfo(integrityAssessmentInfo: string  | undefined) {
        this['integrity_assessment_info'] = integrityAssessmentInfo;
    }
    public get integrityAssessmentInfo(): string | undefined {
        return this['integrity_assessment_info'];
    }
    public withNationality(nationality: string): QualificationCertificateResult {
        this['nationality'] = nationality;
        return this;
    }
    public withName(name: string): QualificationCertificateResult {
        this['name'] = name;
        return this;
    }
    public withAddress(address: string): QualificationCertificateResult {
        this['address'] = address;
        return this;
    }
    public withDrivingClass(drivingClass: string): QualificationCertificateResult {
        this['driving_class'] = drivingClass;
        return this;
    }
    public set drivingClass(drivingClass: string  | undefined) {
        this['driving_class'] = drivingClass;
    }
    public get drivingClass(): string | undefined {
        return this['driving_class'];
    }
    public withIssuingAuthority(issuingAuthority: string): QualificationCertificateResult {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: string  | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority(): string | undefined {
        return this['issuing_authority'];
    }
    public withBirthDate(birthDate: string): QualificationCertificateResult {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string  | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate(): string | undefined {
        return this['birth_date'];
    }
    public withQualificationCategoryList(qualificationCategoryList: Array<QualificationCategory>): QualificationCertificateResult {
        this['qualification_category_list'] = qualificationCategoryList;
        return this;
    }
    public set qualificationCategoryList(qualificationCategoryList: Array<QualificationCategory>  | undefined) {
        this['qualification_category_list'] = qualificationCategoryList;
    }
    public get qualificationCategoryList(): Array<QualificationCategory> | undefined {
        return this['qualification_category_list'];
    }
    public withConfidence(confidence: QualificationConfidence): QualificationCertificateResult {
        this['confidence'] = confidence;
        return this;
    }
}