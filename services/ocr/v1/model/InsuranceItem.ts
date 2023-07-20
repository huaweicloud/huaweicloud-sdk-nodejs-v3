import { InsurancePolicyDetail } from './InsurancePolicyDetail';


export class InsuranceItem {
    private 'insurance_name'?: InsurancePolicyDetail;
    private 'insurance_period'?: InsurancePolicyDetail;
    private 'insurance_amount'?: InsurancePolicyDetail;
    private 'payment_frequency'?: InsurancePolicyDetail;
    private 'payment_period'?: InsurancePolicyDetail;
    private 'payment_amount'?: InsurancePolicyDetail;
    public constructor() { 
    }
    public withInsuranceName(insuranceName: InsurancePolicyDetail): InsuranceItem {
        this['insurance_name'] = insuranceName;
        return this;
    }
    public set insuranceName(insuranceName: InsurancePolicyDetail  | undefined) {
        this['insurance_name'] = insuranceName;
    }
    public get insuranceName(): InsurancePolicyDetail | undefined {
        return this['insurance_name'];
    }
    public withInsurancePeriod(insurancePeriod: InsurancePolicyDetail): InsuranceItem {
        this['insurance_period'] = insurancePeriod;
        return this;
    }
    public set insurancePeriod(insurancePeriod: InsurancePolicyDetail  | undefined) {
        this['insurance_period'] = insurancePeriod;
    }
    public get insurancePeriod(): InsurancePolicyDetail | undefined {
        return this['insurance_period'];
    }
    public withInsuranceAmount(insuranceAmount: InsurancePolicyDetail): InsuranceItem {
        this['insurance_amount'] = insuranceAmount;
        return this;
    }
    public set insuranceAmount(insuranceAmount: InsurancePolicyDetail  | undefined) {
        this['insurance_amount'] = insuranceAmount;
    }
    public get insuranceAmount(): InsurancePolicyDetail | undefined {
        return this['insurance_amount'];
    }
    public withPaymentFrequency(paymentFrequency: InsurancePolicyDetail): InsuranceItem {
        this['payment_frequency'] = paymentFrequency;
        return this;
    }
    public set paymentFrequency(paymentFrequency: InsurancePolicyDetail  | undefined) {
        this['payment_frequency'] = paymentFrequency;
    }
    public get paymentFrequency(): InsurancePolicyDetail | undefined {
        return this['payment_frequency'];
    }
    public withPaymentPeriod(paymentPeriod: InsurancePolicyDetail): InsuranceItem {
        this['payment_period'] = paymentPeriod;
        return this;
    }
    public set paymentPeriod(paymentPeriod: InsurancePolicyDetail  | undefined) {
        this['payment_period'] = paymentPeriod;
    }
    public get paymentPeriod(): InsurancePolicyDetail | undefined {
        return this['payment_period'];
    }
    public withPaymentAmount(paymentAmount: InsurancePolicyDetail): InsuranceItem {
        this['payment_amount'] = paymentAmount;
        return this;
    }
    public set paymentAmount(paymentAmount: InsurancePolicyDetail  | undefined) {
        this['payment_amount'] = paymentAmount;
    }
    public get paymentAmount(): InsurancePolicyDetail | undefined {
        return this['payment_amount'];
    }
}