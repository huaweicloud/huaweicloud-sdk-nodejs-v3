import { InsurancePolicyDetail } from './InsurancePolicyDetail';


export class InsurantItem {
    private 'insurant_name'?: InsurancePolicyDetail | undefined;
    private 'insurant_sex'?: InsurancePolicyDetail | undefined;
    private 'insurant_birthday'?: InsurancePolicyDetail | undefined;
    private 'insurant_id_type'?: InsurancePolicyDetail | undefined;
    private 'insurant_id_number'?: InsurancePolicyDetail | undefined;
    public constructor() { 
    }
    public withInsurantName(insurantName: InsurancePolicyDetail): InsurantItem {
        this['insurant_name'] = insurantName;
        return this;
    }
    public set insurantName(insurantName: InsurancePolicyDetail | undefined) {
        this['insurant_name'] = insurantName;
    }
    public get insurantName() {
        return this['insurant_name'];
    }
    public withInsurantSex(insurantSex: InsurancePolicyDetail): InsurantItem {
        this['insurant_sex'] = insurantSex;
        return this;
    }
    public set insurantSex(insurantSex: InsurancePolicyDetail | undefined) {
        this['insurant_sex'] = insurantSex;
    }
    public get insurantSex() {
        return this['insurant_sex'];
    }
    public withInsurantBirthday(insurantBirthday: InsurancePolicyDetail): InsurantItem {
        this['insurant_birthday'] = insurantBirthday;
        return this;
    }
    public set insurantBirthday(insurantBirthday: InsurancePolicyDetail | undefined) {
        this['insurant_birthday'] = insurantBirthday;
    }
    public get insurantBirthday() {
        return this['insurant_birthday'];
    }
    public withInsurantIdType(insurantIdType: InsurancePolicyDetail): InsurantItem {
        this['insurant_id_type'] = insurantIdType;
        return this;
    }
    public set insurantIdType(insurantIdType: InsurancePolicyDetail | undefined) {
        this['insurant_id_type'] = insurantIdType;
    }
    public get insurantIdType() {
        return this['insurant_id_type'];
    }
    public withInsurantIdNumber(insurantIdNumber: InsurancePolicyDetail): InsurantItem {
        this['insurant_id_number'] = insurantIdNumber;
        return this;
    }
    public set insurantIdNumber(insurantIdNumber: InsurancePolicyDetail | undefined) {
        this['insurant_id_number'] = insurantIdNumber;
    }
    public get insurantIdNumber() {
        return this['insurant_id_number'];
    }
}