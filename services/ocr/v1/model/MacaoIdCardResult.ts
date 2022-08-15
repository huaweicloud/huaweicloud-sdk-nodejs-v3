

export class MacaoIdCardResult {
    public side?: string;
    public name?: string;
    private 'name_en'?: string | undefined;
    public sex?: string;
    private 'issue_date'?: string | undefined;
    private 'expiry_date'?: string | undefined;
    private 'birth_date'?: string | undefined;
    private 'initial_issue_date'?: string | undefined;
    public height?: string;
    private 'number'?: string | undefined;
    public symbols?: string;
    private 'machine_code1'?: string | undefined;
    private 'machine_code2'?: string | undefined;
    private 'machine_code3'?: string | undefined;
    private 'portrait_image'?: string | undefined;
    public confidence?: object;
    public constructor() { 
    }
    public withSide(side: string): MacaoIdCardResult {
        this['side'] = side;
        return this;
    }
    public withName(name: string): MacaoIdCardResult {
        this['name'] = name;
        return this;
    }
    public withNameEn(nameEn: string): MacaoIdCardResult {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn() {
        return this['name_en'];
    }
    public withSex(sex: string): MacaoIdCardResult {
        this['sex'] = sex;
        return this;
    }
    public withIssueDate(issueDate: string): MacaoIdCardResult {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate() {
        return this['issue_date'];
    }
    public withExpiryDate(expiryDate: string): MacaoIdCardResult {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate() {
        return this['expiry_date'];
    }
    public withBirthDate(birthDate: string): MacaoIdCardResult {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate() {
        return this['birth_date'];
    }
    public withInitialIssueDate(initialIssueDate: string): MacaoIdCardResult {
        this['initial_issue_date'] = initialIssueDate;
        return this;
    }
    public set initialIssueDate(initialIssueDate: string | undefined) {
        this['initial_issue_date'] = initialIssueDate;
    }
    public get initialIssueDate() {
        return this['initial_issue_date'];
    }
    public withHeight(height: string): MacaoIdCardResult {
        this['height'] = height;
        return this;
    }
    public withModelNumber(modelNumber: string): MacaoIdCardResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber() {
        return this['number'];
    }
    public withSymbols(symbols: string): MacaoIdCardResult {
        this['symbols'] = symbols;
        return this;
    }
    public withMachineCode1(machineCode1: string): MacaoIdCardResult {
        this['machine_code1'] = machineCode1;
        return this;
    }
    public set machineCode1(machineCode1: string | undefined) {
        this['machine_code1'] = machineCode1;
    }
    public get machineCode1() {
        return this['machine_code1'];
    }
    public withMachineCode2(machineCode2: string): MacaoIdCardResult {
        this['machine_code2'] = machineCode2;
        return this;
    }
    public set machineCode2(machineCode2: string | undefined) {
        this['machine_code2'] = machineCode2;
    }
    public get machineCode2() {
        return this['machine_code2'];
    }
    public withMachineCode3(machineCode3: string): MacaoIdCardResult {
        this['machine_code3'] = machineCode3;
        return this;
    }
    public set machineCode3(machineCode3: string | undefined) {
        this['machine_code3'] = machineCode3;
    }
    public get machineCode3() {
        return this['machine_code3'];
    }
    public withPortraitImage(portraitImage: string): MacaoIdCardResult {
        this['portrait_image'] = portraitImage;
        return this;
    }
    public set portraitImage(portraitImage: string | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage() {
        return this['portrait_image'];
    }
    public withConfidence(confidence: object): MacaoIdCardResult {
        this['confidence'] = confidence;
        return this;
    }
}