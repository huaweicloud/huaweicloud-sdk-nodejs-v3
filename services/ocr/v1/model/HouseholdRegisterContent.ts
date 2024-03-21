

export class HouseholdRegisterContent {
    public name?: string;
    private 'householder_relationship'?: string;
    private 'former_name'?: string;
    public sex?: string;
    public birthplace?: string;
    public ethnicity?: string;
    private 'origin_place'?: string;
    private 'birth_date'?: string;
    private 'other_address'?: string;
    private 'religious_belief'?: string;
    private 'id_card_number'?: string;
    public height?: string;
    private 'blood_type'?: string;
    public education?: string;
    private 'marital_status'?: string;
    private 'military_service_status'?: string;
    private 'work_place'?: string;
    public occupation?: string;
    private 'migrated_to_city'?: string;
    private 'migrated_to_address'?: string;
    private 'registrar_signature_seal'?: string;
    private 'registration_date'?: string;
    private 'household_type'?: string;
    private 'household_number'?: string;
    private 'householder_name'?: string;
    public community?: string;
    public address?: string;
    private 'issue_date'?: string;
    private 'police_station'?: string;
    public constructor() { 
    }
    public withName(name: string): HouseholdRegisterContent {
        this['name'] = name;
        return this;
    }
    public withHouseholderRelationship(householderRelationship: string): HouseholdRegisterContent {
        this['householder_relationship'] = householderRelationship;
        return this;
    }
    public set householderRelationship(householderRelationship: string  | undefined) {
        this['householder_relationship'] = householderRelationship;
    }
    public get householderRelationship(): string | undefined {
        return this['householder_relationship'];
    }
    public withFormerName(formerName: string): HouseholdRegisterContent {
        this['former_name'] = formerName;
        return this;
    }
    public set formerName(formerName: string  | undefined) {
        this['former_name'] = formerName;
    }
    public get formerName(): string | undefined {
        return this['former_name'];
    }
    public withSex(sex: string): HouseholdRegisterContent {
        this['sex'] = sex;
        return this;
    }
    public withBirthplace(birthplace: string): HouseholdRegisterContent {
        this['birthplace'] = birthplace;
        return this;
    }
    public withEthnicity(ethnicity: string): HouseholdRegisterContent {
        this['ethnicity'] = ethnicity;
        return this;
    }
    public withOriginPlace(originPlace: string): HouseholdRegisterContent {
        this['origin_place'] = originPlace;
        return this;
    }
    public set originPlace(originPlace: string  | undefined) {
        this['origin_place'] = originPlace;
    }
    public get originPlace(): string | undefined {
        return this['origin_place'];
    }
    public withBirthDate(birthDate: string): HouseholdRegisterContent {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string  | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate(): string | undefined {
        return this['birth_date'];
    }
    public withOtherAddress(otherAddress: string): HouseholdRegisterContent {
        this['other_address'] = otherAddress;
        return this;
    }
    public set otherAddress(otherAddress: string  | undefined) {
        this['other_address'] = otherAddress;
    }
    public get otherAddress(): string | undefined {
        return this['other_address'];
    }
    public withReligiousBelief(religiousBelief: string): HouseholdRegisterContent {
        this['religious_belief'] = religiousBelief;
        return this;
    }
    public set religiousBelief(religiousBelief: string  | undefined) {
        this['religious_belief'] = religiousBelief;
    }
    public get religiousBelief(): string | undefined {
        return this['religious_belief'];
    }
    public withIdCardNumber(idCardNumber: string): HouseholdRegisterContent {
        this['id_card_number'] = idCardNumber;
        return this;
    }
    public set idCardNumber(idCardNumber: string  | undefined) {
        this['id_card_number'] = idCardNumber;
    }
    public get idCardNumber(): string | undefined {
        return this['id_card_number'];
    }
    public withHeight(height: string): HouseholdRegisterContent {
        this['height'] = height;
        return this;
    }
    public withBloodType(bloodType: string): HouseholdRegisterContent {
        this['blood_type'] = bloodType;
        return this;
    }
    public set bloodType(bloodType: string  | undefined) {
        this['blood_type'] = bloodType;
    }
    public get bloodType(): string | undefined {
        return this['blood_type'];
    }
    public withEducation(education: string): HouseholdRegisterContent {
        this['education'] = education;
        return this;
    }
    public withMaritalStatus(maritalStatus: string): HouseholdRegisterContent {
        this['marital_status'] = maritalStatus;
        return this;
    }
    public set maritalStatus(maritalStatus: string  | undefined) {
        this['marital_status'] = maritalStatus;
    }
    public get maritalStatus(): string | undefined {
        return this['marital_status'];
    }
    public withMilitaryServiceStatus(militaryServiceStatus: string): HouseholdRegisterContent {
        this['military_service_status'] = militaryServiceStatus;
        return this;
    }
    public set militaryServiceStatus(militaryServiceStatus: string  | undefined) {
        this['military_service_status'] = militaryServiceStatus;
    }
    public get militaryServiceStatus(): string | undefined {
        return this['military_service_status'];
    }
    public withWorkPlace(workPlace: string): HouseholdRegisterContent {
        this['work_place'] = workPlace;
        return this;
    }
    public set workPlace(workPlace: string  | undefined) {
        this['work_place'] = workPlace;
    }
    public get workPlace(): string | undefined {
        return this['work_place'];
    }
    public withOccupation(occupation: string): HouseholdRegisterContent {
        this['occupation'] = occupation;
        return this;
    }
    public withMigratedToCity(migratedToCity: string): HouseholdRegisterContent {
        this['migrated_to_city'] = migratedToCity;
        return this;
    }
    public set migratedToCity(migratedToCity: string  | undefined) {
        this['migrated_to_city'] = migratedToCity;
    }
    public get migratedToCity(): string | undefined {
        return this['migrated_to_city'];
    }
    public withMigratedToAddress(migratedToAddress: string): HouseholdRegisterContent {
        this['migrated_to_address'] = migratedToAddress;
        return this;
    }
    public set migratedToAddress(migratedToAddress: string  | undefined) {
        this['migrated_to_address'] = migratedToAddress;
    }
    public get migratedToAddress(): string | undefined {
        return this['migrated_to_address'];
    }
    public withRegistrarSignatureSeal(registrarSignatureSeal: string): HouseholdRegisterContent {
        this['registrar_signature_seal'] = registrarSignatureSeal;
        return this;
    }
    public set registrarSignatureSeal(registrarSignatureSeal: string  | undefined) {
        this['registrar_signature_seal'] = registrarSignatureSeal;
    }
    public get registrarSignatureSeal(): string | undefined {
        return this['registrar_signature_seal'];
    }
    public withRegistrationDate(registrationDate: string): HouseholdRegisterContent {
        this['registration_date'] = registrationDate;
        return this;
    }
    public set registrationDate(registrationDate: string  | undefined) {
        this['registration_date'] = registrationDate;
    }
    public get registrationDate(): string | undefined {
        return this['registration_date'];
    }
    public withHouseholdType(householdType: string): HouseholdRegisterContent {
        this['household_type'] = householdType;
        return this;
    }
    public set householdType(householdType: string  | undefined) {
        this['household_type'] = householdType;
    }
    public get householdType(): string | undefined {
        return this['household_type'];
    }
    public withHouseholdNumber(householdNumber: string): HouseholdRegisterContent {
        this['household_number'] = householdNumber;
        return this;
    }
    public set householdNumber(householdNumber: string  | undefined) {
        this['household_number'] = householdNumber;
    }
    public get householdNumber(): string | undefined {
        return this['household_number'];
    }
    public withHouseholderName(householderName: string): HouseholdRegisterContent {
        this['householder_name'] = householderName;
        return this;
    }
    public set householderName(householderName: string  | undefined) {
        this['householder_name'] = householderName;
    }
    public get householderName(): string | undefined {
        return this['householder_name'];
    }
    public withCommunity(community: string): HouseholdRegisterContent {
        this['community'] = community;
        return this;
    }
    public withAddress(address: string): HouseholdRegisterContent {
        this['address'] = address;
        return this;
    }
    public withIssueDate(issueDate: string): HouseholdRegisterContent {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withPoliceStation(policeStation: string): HouseholdRegisterContent {
        this['police_station'] = policeStation;
        return this;
    }
    public set policeStation(policeStation: string  | undefined) {
        this['police_station'] = policeStation;
    }
    public get policeStation(): string | undefined {
        return this['police_station'];
    }
}