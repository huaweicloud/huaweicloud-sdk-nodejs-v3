

export class CambodianIdCardResult {
    private 'id_number'?: string | undefined;
    private 'name_kh'?: string | undefined;
    private 'name_en'?: string | undefined;
    private 'birth_date'?: string | undefined;
    public sex?: string;
    public height?: string;
    private 'birth_place'?: string | undefined;
    public address?: string;
    private 'issue_date'?: string | undefined;
    private 'expiry_date'?: string | undefined;
    public description?: string;
    private 'machine_code1'?: string | undefined;
    private 'machine_code2'?: string | undefined;
    private 'machine_code3'?: string | undefined;
    private 'portrait_image'?: string | undefined;
    private 'portrait_location'?: Array<Array<number>> | undefined;
    private 'idcard_type'?: string | undefined;
    public confidence?: object;
    public constructor() { 
    }
    public withIdNumber(idNumber: string): CambodianIdCardResult {
        this['id_number'] = idNumber;
        return this;
    }
    public set idNumber(idNumber: string | undefined) {
        this['id_number'] = idNumber;
    }
    public get idNumber() {
        return this['id_number'];
    }
    public withNameKh(nameKh: string): CambodianIdCardResult {
        this['name_kh'] = nameKh;
        return this;
    }
    public set nameKh(nameKh: string | undefined) {
        this['name_kh'] = nameKh;
    }
    public get nameKh() {
        return this['name_kh'];
    }
    public withNameEn(nameEn: string): CambodianIdCardResult {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn() {
        return this['name_en'];
    }
    public withBirthDate(birthDate: string): CambodianIdCardResult {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate() {
        return this['birth_date'];
    }
    public withSex(sex: string): CambodianIdCardResult {
        this['sex'] = sex;
        return this;
    }
    public withHeight(height: string): CambodianIdCardResult {
        this['height'] = height;
        return this;
    }
    public withBirthPlace(birthPlace: string): CambodianIdCardResult {
        this['birth_place'] = birthPlace;
        return this;
    }
    public set birthPlace(birthPlace: string | undefined) {
        this['birth_place'] = birthPlace;
    }
    public get birthPlace() {
        return this['birth_place'];
    }
    public withAddress(address: string): CambodianIdCardResult {
        this['address'] = address;
        return this;
    }
    public withIssueDate(issueDate: string): CambodianIdCardResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate() {
        return this['issue_date'];
    }
    public withExpiryDate(expiryDate: string): CambodianIdCardResult {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate() {
        return this['expiry_date'];
    }
    public withDescription(description: string): CambodianIdCardResult {
        this['description'] = description;
        return this;
    }
    public withMachineCode1(machineCode1: string): CambodianIdCardResult {
        this['machine_code1'] = machineCode1;
        return this;
    }
    public set machineCode1(machineCode1: string | undefined) {
        this['machine_code1'] = machineCode1;
    }
    public get machineCode1() {
        return this['machine_code1'];
    }
    public withMachineCode2(machineCode2: string): CambodianIdCardResult {
        this['machine_code2'] = machineCode2;
        return this;
    }
    public set machineCode2(machineCode2: string | undefined) {
        this['machine_code2'] = machineCode2;
    }
    public get machineCode2() {
        return this['machine_code2'];
    }
    public withMachineCode3(machineCode3: string): CambodianIdCardResult {
        this['machine_code3'] = machineCode3;
        return this;
    }
    public set machineCode3(machineCode3: string | undefined) {
        this['machine_code3'] = machineCode3;
    }
    public get machineCode3() {
        return this['machine_code3'];
    }
    public withPortraitImage(portraitImage: string): CambodianIdCardResult {
        this['portrait_image'] = portraitImage;
        return this;
    }
    public set portraitImage(portraitImage: string | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage() {
        return this['portrait_image'];
    }
    public withPortraitLocation(portraitLocation: Array<Array<number>>): CambodianIdCardResult {
        this['portrait_location'] = portraitLocation;
        return this;
    }
    public set portraitLocation(portraitLocation: Array<Array<number>> | undefined) {
        this['portrait_location'] = portraitLocation;
    }
    public get portraitLocation() {
        return this['portrait_location'];
    }
    public withIdcardType(idcardType: string): CambodianIdCardResult {
        this['idcard_type'] = idcardType;
        return this;
    }
    public set idcardType(idcardType: string | undefined) {
        this['idcard_type'] = idcardType;
    }
    public get idcardType() {
        return this['idcard_type'];
    }
    public withConfidence(confidence: object): CambodianIdCardResult {
        this['confidence'] = confidence;
        return this;
    }
}