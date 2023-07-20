

export class MacaoIdCardResult {
    public side?: string;
    public name?: string;
    private 'name_en'?: string;
    public sex?: string;
    private 'issue_date'?: string;
    private 'expiry_date'?: string;
    private 'birth_date'?: string;
    private 'initial_issue_date'?: string;
    public height?: string;
    private 'number'?: string;
    public symbols?: string;
    private 'machine_code1'?: string;
    private 'machine_code2'?: string;
    private 'machine_code3'?: string;
    private 'portrait_image'?: string;
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
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
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
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withExpiryDate(expiryDate: string): MacaoIdCardResult {
        this['expiry_date'] = expiryDate;
        return this;
    }
    public set expiryDate(expiryDate: string  | undefined) {
        this['expiry_date'] = expiryDate;
    }
    public get expiryDate(): string | undefined {
        return this['expiry_date'];
    }
    public withBirthDate(birthDate: string): MacaoIdCardResult {
        this['birth_date'] = birthDate;
        return this;
    }
    public set birthDate(birthDate: string  | undefined) {
        this['birth_date'] = birthDate;
    }
    public get birthDate(): string | undefined {
        return this['birth_date'];
    }
    public withInitialIssueDate(initialIssueDate: string): MacaoIdCardResult {
        this['initial_issue_date'] = initialIssueDate;
        return this;
    }
    public set initialIssueDate(initialIssueDate: string  | undefined) {
        this['initial_issue_date'] = initialIssueDate;
    }
    public get initialIssueDate(): string | undefined {
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
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
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
    public set machineCode1(machineCode1: string  | undefined) {
        this['machine_code1'] = machineCode1;
    }
    public get machineCode1(): string | undefined {
        return this['machine_code1'];
    }
    public withMachineCode2(machineCode2: string): MacaoIdCardResult {
        this['machine_code2'] = machineCode2;
        return this;
    }
    public set machineCode2(machineCode2: string  | undefined) {
        this['machine_code2'] = machineCode2;
    }
    public get machineCode2(): string | undefined {
        return this['machine_code2'];
    }
    public withMachineCode3(machineCode3: string): MacaoIdCardResult {
        this['machine_code3'] = machineCode3;
        return this;
    }
    public set machineCode3(machineCode3: string  | undefined) {
        this['machine_code3'] = machineCode3;
    }
    public get machineCode3(): string | undefined {
        return this['machine_code3'];
    }
    public withPortraitImage(portraitImage: string): MacaoIdCardResult {
        this['portrait_image'] = portraitImage;
        return this;
    }
    public set portraitImage(portraitImage: string  | undefined) {
        this['portrait_image'] = portraitImage;
    }
    public get portraitImage(): string | undefined {
        return this['portrait_image'];
    }
    public withConfidence(confidence: object): MacaoIdCardResult {
        this['confidence'] = confidence;
        return this;
    }
}