import { InsurancePolicyDetail } from './InsurancePolicyDetail';


export class InsuranceItem {
    private 'insurance_name'?: InsurancePolicyDetail | undefined;
    private 'insurance_period'?: InsurancePolicyDetail | undefined;
    private 'insurance_amount'?: InsurancePolicyDetail | undefined;
    private 'payment_frequency'?: InsurancePolicyDetail | undefined;
    private 'payment_period'?: InsurancePolicyDetail | undefined;
    private 'payment_amount'?: InsurancePolicyDetail | undefined;
    public constructor() { 
    }
    public withInsuranceName(insuranceName: InsurancePolicyDetail): InsuranceItem {
        this['insurance_name'] = insuranceName;
        return this;
    }
    public set insuranceName(insuranceName: InsurancePolicyDetail | undefined) {
        this['insurance_name'] = insuranceName;
    }
    public get insuranceName() {
        return this['insurance_name'];
    }
    public withInsurancePeriod(insurancePeriod: InsurancePolicyDetail): InsuranceItem {
        this['insurance_period'] = insurancePeriod;
        return this;
    }
    public set insurancePeriod(insurancePeriod: InsurancePolicyDetail | undefined) {
        this['insurance_period'] = insurancePeriod;
    }
    public get insurancePeriod() {
        return this['insurance_period'];
    }
    public withInsuranceAmount(insuranceAmount: InsurancePolicyDetail): InsuranceItem {
        this['insurance_amount'] = insuranceAmount;
        return this;
    }
    public set insuranceAmount(insuranceAmount: InsurancePolicyDetail | undefined) {
        this['insurance_amount'] = insuranceAmount;
    }
    public get insuranceAmount() {
        return this['insurance_amount'];
    }
    public withPaymentFrequency(paymentFrequency: InsurancePolicyDetail): InsuranceItem {
        this['payment_frequency'] = paymentFrequency;
        return this;
    }
    public set paymentFrequency(paymentFrequency: InsurancePolicyDetail | undefined) {
        this['payment_frequency'] = paymentFrequency;
    }
    public get paymentFrequency() {
        return this['payment_frequency'];
    }
    public withPaymentPeriod(paymentPeriod: InsurancePolicyDetail): InsuranceItem {
        this['payment_period'] = paymentPeriod;
        return this;
    }
    public set paymentPeriod(paymentPeriod: InsurancePolicyDetail | undefined) {
        this['payment_period'] = paymentPeriod;
    }
    public get paymentPeriod() {
        return this['payment_period'];
    }
    public withPaymentAmount(paymentAmount: InsurancePolicyDetail): InsuranceItem {
        this['payment_amount'] = paymentAmount;
        return this;
    }
    public set paymentAmount(paymentAmount: InsurancePolicyDetail | undefined) {
        this['payment_amount'] = paymentAmount;
    }
    public get paymentAmount() {
        return this['payment_amount'];
    }
}