import { QualificationCategoryConfidence } from './QualificationCategoryConfidence';


export class QualificationConfidence {
    private 'id_number'?: number | undefined;
    private 'assessment_date'?: number | undefined;
    private 'certificate_number'?: number | undefined;
    private 'file_number'?: number | undefined;
    private 'union_card_number'?: number | undefined;
    private 'continuing_education_info'?: number | undefined;
    public sex?: number;
    private 'phone_number'?: number | undefined;
    private 'registration_date'?: number | undefined;
    private 'work_unit'?: number | undefined;
    private 'integrity_assessment_info'?: number | undefined;
    public nationality?: number;
    public name?: number;
    public address?: number;
    private 'driving_class'?: number | undefined;
    private 'issuing_authority'?: number | undefined;
    private 'birth_date'?: number | undefined;
    private 'qualification_category_list'?: Array<QualificationCategoryConfidence> | undefined;
    public constructor() { 
    }
    public withIdNumber(idNumber: number): QualificationConfidence {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: number | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber() {
        return this['id_number'];
    }
    public withAssessmentDate(assessmentDate: number): QualificationConfidence {
        this['assessment_date'] = assessmentDate;
        return this;
    }
    public set assessmentDate(assessmentDate: number | undefined) {
        this['assessment_date'] = assessmentDate;
    }
    public get assessmentDate() {
        return this['assessment_date'];
    }
    public withCertificateNumber(certificateNumber: number): QualificationConfidence {
        this['certificate_number'] = certificateNumber;
        return this;
    }
    public set certificateNumber(certificateNumber: number | undefined) {
        this['certificate_number'] = certificateNumber;
    }
    public get certificateNumber() {
        return this['certificate_number'];
    }
    public withFileNumber(fileNumber: number): QualificationConfidence {
        this['file_number'] = fileNumber;
        return this;
    }
    public set fileNumber(fileNumber: number | undefined) {
        this['file_number'] = fileNumber;
    }
    public get fileNumber() {
        return this['file_number'];
    }
    public withUnionCardNumber(unionCardNumber: number): QualificationConfidence {
        this['union_card_number'] = unionCardNumber;
        return this;
    }
    public set unionCardNumber(unionCardNumber: number | undefined) {
        this['union_card_number'] = unionCardNumber;
    }
    public get unionCardNumber() {
        return this['union_card_number'];
    }
    public withContinuingEducationInfo(continuingEducationInfo: number): QualificationConfidence {
        this['continuing_education_info'] = continuingEducationInfo;
        return this;
    }
    public set continuingEducationInfo(continuingEducationInfo: number | undefined) {
        this['continuing_education_info'] = continuingEducationInfo;
    }
    public get continuingEducationInfo() {
        return this['continuing_education_info'];
    }
    public withSex(sex: number): QualificationConfidence {
        this['sex'] = sex;
        return this;
    }
    public withPhoneNumber(phoneNumber: number): QualificationConfidence {
        this['phone_number'] = phoneNumber;
        return this;
    }
    public set phoneNumber(phoneNumber: number | undefined) {
        this['phone_number'] = phoneNumber;
    }
    public get phoneNumber() {
        return this['phone_number'];
    }
    public withRegistrationDate(registrationDate: number): QualificationConfidence {
        this['registration_date'] = registrationDate;
        return this;
    }
    public set registrationDate(registrationDate: number | undefined) {
        this['registration_date'] = registrationDate;
    }
    public get registrationDate() {
        return this['registration_date'];
    }
    public withWorkUnit(workUnit: number): QualificationConfidence {
        this['work_unit'] = workUnit;
        return this;
    }
    public set workUnit(workUnit: number | undefined) {
        this['work_unit'] = workUnit;
    }
    public get workUnit() {
        return this['work_unit'];
    }
    public withIntegrityAssessmentInfo(integrityAssessmentInfo: number): QualificationConfidence {
        this['integrity_assessment_info'] = integrityAssessmentInfo;
        return this;
    }
    public set integrityAssessmentInfo(integrityAssessmentInfo: number | undefined) {
        this['integrity_assessment_info'] = integrityAssessmentInfo;
    }
    public get integrityAssessmentInfo() {
        return this['integrity_assessment_info'];
    }
    public withNationality(nationality: number): QualificationConfidence {
        this['nationality'] = nationality;
        return this;
    }
    public withName(name: number): QualificationConfidence {
        this['name'] = name;
        return this;
    }
    public withAddress(address: number): QualificationConfidence {
        this['address'] = address;
        return this;
    }
    public withDrivingClass(drivingClass: number): QualificationConfidence {
        this['driving_class'] = drivingClass;
        return this;
    }
    public set drivingClass(drivingClass: number | undefined) {
        this['driving_class'] = drivingClass;
    }
    public get drivingClass() {
        return this['driving_class'];
    }
    public withIssuingAuthority(issuingAuthority: number): QualificationConfidence {
        this['issuing_authority'] = issuingAuthority;
        return this;
    }
    public set issuingAuthority(issuingAuthority: number | undefined) {
        this['issuing_authority'] = issuingAuthority;
    }
    public get issuingAuthority() {
        return this['issuing_authority'];
    }
    public withBirthDate(birthDate: number): QualificationConfidence {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: number | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate() {
        return this['birth_date'];
    }
    public withQualificationCategoryList(qualificationCategoryList: Array<QualificationCategoryConfidence>): QualificationConfidence {
        this['qualification_category_list'] = qualificationCategoryList;
        return this;
    }
    public set qualificationCategoryList(qualificationCategoryList: Array<QualificationCategoryConfidence> | undefined) {
        this['qualification_category_list'] = qualificationCategoryList;
    }
    public get qualificationCategoryList() {
        return this['qualification_category_list'];
    }
}