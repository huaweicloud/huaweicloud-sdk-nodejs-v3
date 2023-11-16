

export class PeruIdCardResult {
    private 'cui_number'?: string;
    private 'first_surname'?: string;
    private 'second_surname'?: string;
    private 'given_name'?: string;
    public sex?: string;
    private 'marital_status'?: string;
    private 'birth_date'?: string;
    public nationality?: string;
    private 'issue_date'?: string;
    private 'expiry_date'?: string;
    private 'birth_place'?: string;
    private 'voting_group'?: string;
    private 'organ_donation'?: string;
    private 'registration_date'?: string;
    private 'portrait_image'?: string;
    private 'portrait_location'?: Array<Array<number>>;
    public address?: string;
    public department?: string;
    public province?: string;
    public district?: string;
    public remarks?: string;
    private 'machine_code1'?: string;
    private 'machine_code2'?: string;
    private 'machine_code3'?: string;
    public duplicate?: boolean;
    public confidence?: { [key: string]: number; };
    public constructor() { 
    }
    public withCuiNumber(cuiNumber: string): PeruIdCardResult {
        this['cui_number'] = cuiNumber;
        return this;
    }
    public set cuiNumber(cuiNumber: string  | undefined) {
        this['cui_number'] = cuiNumber;
    }
    public get cuiNumber(): string | undefined {
        return this['cui_number'];
    }
    public withFirstSurname(firstSurname: string): PeruIdCardResult {
        this['first_surname'] = firstSurname;
        return this;
    }
    public set firstSurname(firstSurname: string  | undefined) {
        this['first_surname'] = firstSurname;
    }
    public get firstSurname(): string | undefined {
        return this['first_surname'];
    }
    public withSecondSurname(secondSurname: string): PeruIdCardResult {
        this['second_surname'] = secondSurname;
        return this;
    }
    public set secondSurname(secondSurname: string  | undefined) {
        this['second_surname'] = secondSurname;
    }
    public get secondSurname(): string | undefined {
        return this['second_surname'];
    }
    public withGivenName(givenName: string): PeruIdCardResult {
        this['given_name'] = givenName;
        return this;
    }
    public set givenName(givenName: string  | undefined) {
        this['given_name'] = givenName;
    }
    public get givenName(): string | undefined {
        return this['given_name'];
    }
    public withSex(sex: string): PeruIdCardResult {
        this['sex'] = sex;
        return this;
    }
    public withMaritalStatus(maritalStatus: string): PeruIdCardResult {
        this['marital_status'] = maritalStatus;
        return this;
    }
    public set maritalStatus(maritalStatus: string  | undefined) {
        this['marital_status'] = maritalStatus;
    }
    public get maritalStatus(): string | undefined {
        return this['marital_status'];
    }
    public withBirthDate(birthDate: string): PeruIdCardResult {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string  | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate(): string | undefined {
        return this['birth_date'];
    }
    public withNationality(nationality: string): PeruIdCardResult {
        this['nationality'] = nationality;
        return this;
    }
    public withIssueDate(issueDate: string): PeruIdCardResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withExpiryDate(expiryDate: string): PeruIdCardResult {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
        return this['expiry_date'];
    }
    public withBirthPlace(birthPlace: string): PeruIdCardResult {
        this['birth_place'] = birthPlace;
        return this;
    }
    public set birthPlace(birthPlace: string  | undefined) {
        this['birth_place'] = birthPlace;
    }
    public get birthPlace(): string | undefined {
        return this['birth_place'];
    }
    public withVotingGroup(votingGroup: string): PeruIdCardResult {
        this['voting_group'] = votingGroup;
        return this;
    }
    public set votingGroup(votingGroup: string  | undefined) {
        this['voting_group'] = votingGroup;
    }
    public get votingGroup(): string | undefined {
        return this['voting_group'];
    }
    public withOrganDonation(organDonation: string): PeruIdCardResult {
        this['organ_donation'] = organDonation;
        return this;
    }
    public set organDonation(organDonation: string  | undefined) {
        this['organ_donation'] = organDonation;
    }
    public get organDonation(): string | undefined {
        return this['organ_donation'];
    }
    public withRegistrationDate(registrationDate: string): PeruIdCardResult {
        this['registration_date'] = registrationDate;
        return this;
    }
    public set registrationDate(registrationDate: string  | undefined) {
        this['registration_date'] = registrationDate;
    }
    public get registrationDate(): string | undefined {
        return this['registration_date'];
    }
    public withPortraitImage(portraitImage: string): PeruIdCardResult {
        this['portrait_image'] = portraitImage;
        return this;
    }
    public set portraitImage(portraitImage: string  | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage(): string | undefined {
        return this['portrait_image'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): PeruIdCardResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>>  | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation(): Array<Array<number>> | undefined {
        return this['portrait_location'];
    }
    public withAddress(address: string): PeruIdCardResult {
        this['address'] = address;
        return this;
    }
    public withDepartment(department: string): PeruIdCardResult {
        this['department'] = department;
        return this;
    }
    public withProvince(province: string): PeruIdCardResult {
        this['province'] = province;
        return this;
    }
    public withDistrict(district: string): PeruIdCardResult {
        this['district'] = district;
        return this;
    }
    public withRemarks(remarks: string): PeruIdCardResult {
        this['remarks'] = remarks;
        return this;
    }
    public withMachineCode1(machineCode1: string): PeruIdCardResult {
        this['machine_code1'] = machineCode1;
        return this;
    }
    public set machineCode1(machineCode1: string  | undefined) {
        this['machine_code1'] = machineCode1;
    }
    public get machineCode1(): string | undefined {
        return this['machine_code1'];
    }
    public withMachineCode2(machineCode2: string): PeruIdCardResult {
        this['machine_code2'] = machineCode2;
        return this;
    }
    public set machineCode2(machineCode2: string  | undefined) {
        this['machine_code2'] = machineCode2;
    }
    public get machineCode2(): string | undefined {
        return this['machine_code2'];
    }
    public withMachineCode3(machineCode3: string): PeruIdCardResult {
        this['machine_code3'] = machineCode3;
        return this;
    }
    public set machineCode3(machineCode3: string  | undefined) {
        this['machine_code3'] = machineCode3;
    }
    public get machineCode3(): string | undefined {
        return this['machine_code3'];
    }
    public withDuplicate(duplicate: boolean): PeruIdCardResult {
        this['duplicate'] = duplicate;
        return this;
    }
    public withConfidence(confidence: { [key: string]: number; }): PeruIdCardResult {
        this['confidence'] = confidence;
        return this;
    }
}