import { InsurancePolicyDetail } from './InsurancePolicyDetail';


export class BeneficiaryItem {
    private 'beneficiary_name'?: InsurancePolicyDetail | undefined;
    private 'beneficiary_type'?: InsurancePolicyDetail | undefined;
    private 'beneficiary_order'?: InsurancePolicyDetail | undefined;
    private 'beneficiary_share'?: InsurancePolicyDetail | undefined;
    public constructor() { 
    }
    public withBeneficiaryName(beneficiaryName: InsurancePolicyDetail): BeneficiaryItem {
        this['beneficiary_name'] = beneficiaryName;
        return this;
    }
    public set beneficiaryName(beneficiaryName: InsurancePolicyDetail | undefined) {
        this['beneficiary_name'] = beneficiaryName;
    }
    public get beneficiaryName() {
        return this['beneficiary_name'];
    }
    public withBeneficiaryType(beneficiaryType: InsurancePolicyDetail): BeneficiaryItem {
        this['beneficiary_type'] = beneficiaryType;
        return this;
    }
    public set beneficiaryType(beneficiaryType: InsurancePolicyDetail | undefined) {
        this['beneficiary_type'] = beneficiaryType;
    }
    public get beneficiaryType() {
        return this['beneficiary_type'];
    }
    public withBeneficiaryOrder(beneficiaryOrder: InsurancePolicyDetail): BeneficiaryItem {
        this['beneficiary_order'] = beneficiaryOrder;
        return this;
    }
    public set beneficiaryOrder(beneficiaryOrder: InsurancePolicyDetail | undefined) {
        this['beneficiary_order'] = beneficiaryOrder;
    }
    public get beneficiaryOrder() {
        return this['beneficiary_order'];
    }
    public withBeneficiaryShare(beneficiaryShare: InsurancePolicyDetail): BeneficiaryItem {
        this['beneficiary_share'] = beneficiaryShare;
        return this;
    }
    public set beneficiaryShare(beneficiaryShare: InsurancePolicyDetail | undefined) {
        this['beneficiary_share'] = beneficiaryShare;
    }
    public get beneficiaryShare() {
        return this['beneficiary_share'];
    }
}