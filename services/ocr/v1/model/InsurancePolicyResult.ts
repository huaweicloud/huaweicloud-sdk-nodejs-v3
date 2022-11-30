import { BeneficiaryItem } from './BeneficiaryItem';
import { InsuranceItem } from './InsuranceItem';
import { InsurancePolicyDetail } from './InsurancePolicyDetail';
import { InsurantItem } from './InsurantItem';


export class InsurancePolicyResult {
    private 'bank_name'?: string | undefined;
    private 'bill_number'?: InsurancePolicyDetail | undefined;
    public company?: InsurancePolicyDetail;
    private 'effective_date'?: InsurancePolicyDetail | undefined;
    private 'applicant_name'?: InsurancePolicyDetail | undefined;
    private 'applicant_sex'?: InsurancePolicyDetail | undefined;
    private 'applicant_birthday'?: InsurancePolicyDetail | undefined;
    private 'applicant_id_type'?: InsurancePolicyDetail | undefined;
    private 'applicant_id_number'?: InsurancePolicyDetail | undefined;
    private 'insurant_list'?: Array<InsurantItem> | undefined;
    private 'beneficiary_list'?: Array<BeneficiaryItem> | undefined;
    private 'insurance_list'?: Array<InsuranceItem> | undefined;
    public constructor() { 
    }
    public withBankName(bankName: string): InsurancePolicyResult {
        this['bank_name'] = bankName;
        return this;
    }
    public set bankName(bankName: string | undefined) {
        this['bank_name'] = bankName;
    }
    public get bankName() {
        return this['bank_name'];
    }
    public withBillNumber(billNumber: InsurancePolicyDetail): InsurancePolicyResult {
        this['bill_number'] = billNumber;
        return this;
    }
    public set billNumber(billNumber: InsurancePolicyDetail | undefined) {
        this['bill_number'] = billNumber;
    }
    public get billNumber() {
        return this['bill_number'];
    }
    public withCompany(company: InsurancePolicyDetail): InsurancePolicyResult {
        this['company'] = company;
        return this;
    }
    public withEffectiveDate(effectiveDate: InsurancePolicyDetail): InsurancePolicyResult {
        this['effective_date'] = effectiveDate;
        return this;
    }
    public set effectiveDate(effectiveDate: InsurancePolicyDetail | undefined) {
        this['effective_date'] = effectiveDate;
    }
    public get effectiveDate() {
        return this['effective_date'];
    }
    public withApplicantName(applicantName: InsurancePolicyDetail): InsurancePolicyResult {
        this['applicant_name'] = applicantName;
        return this;
    }
    public set applicantName(applicantName: InsurancePolicyDetail | undefined) {
        this['applicant_name'] = applicantName;
    }
    public get applicantName() {
        return this['applicant_name'];
    }
    public withApplicantSex(applicantSex: InsurancePolicyDetail): InsurancePolicyResult {
        this['applicant_sex'] = applicantSex;
        return this;
    }
    public set applicantSex(applicantSex: InsurancePolicyDetail | undefined) {
        this['applicant_sex'] = applicantSex;
    }
    public get applicantSex() {
        return this['applicant_sex'];
    }
    public withApplicantBirthday(applicantBirthday: InsurancePolicyDetail): InsurancePolicyResult {
        this['applicant_birthday'] = applicantBirthday;
        return this;
    }
    public set applicantBirthday(applicantBirthday: InsurancePolicyDetail | undefined) {
        this['applicant_birthday'] = applicantBirthday;
    }
    public get applicantBirthday() {
        return this['applicant_birthday'];
    }
    public withApplicantIdType(applicantIdType: InsurancePolicyDetail): InsurancePolicyResult {
        this['applicant_id_type'] = applicantIdType;
        return this;
    }
    public set applicantIdType(applicantIdType: InsurancePolicyDetail | undefined) {
        this['applicant_id_type'] = applicantIdType;
    }
    public get applicantIdType() {
        return this['applicant_id_type'];
    }
    public withApplicantIdNumber(applicantIdNumber: InsurancePolicyDetail): InsurancePolicyResult {
        this['applicant_id_number'] = applicantIdNumber;
        return this;
    }
    public set applicantIdNumber(applicantIdNumber: InsurancePolicyDetail | undefined) {
        this['applicant_id_number'] = applicantIdNumber;
    }
    public get applicantIdNumber() {
        return this['applicant_id_number'];
    }
    public withInsurantList(insurantList: Array<InsurantItem>): InsurancePolicyResult {
        this['insurant_list'] = insurantList;
        return this;
    }
    public set insurantList(insurantList: Array<InsurantItem> | undefined) {
        this['insurant_list'] = insurantList;
    }
    public get insurantList() {
        return this['insurant_list'];
    }
    public withBeneficiaryList(beneficiaryList: Array<BeneficiaryItem>): InsurancePolicyResult {
        this['beneficiary_list'] = beneficiaryList;
        return this;
    }
    public set beneficiaryList(beneficiaryList: Array<BeneficiaryItem> | undefined) {
        this['beneficiary_list'] = beneficiaryList;
    }
    public get beneficiaryList() {
        return this['beneficiary_list'];
    }
    public withInsuranceList(insuranceList: Array<InsuranceItem>): InsurancePolicyResult {
        this['insurance_list'] = insuranceList;
        return this;
    }
    public set insuranceList(insuranceList: Array<InsuranceItem> | undefined) {
        this['insurance_list'] = insuranceList;
    }
    public get insuranceList() {
        return this['insurance_list'];
    }
}