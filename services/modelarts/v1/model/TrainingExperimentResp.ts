

export class TrainingExperimentResp {
    public name?: string;
    public id?: string;
    private 'serial_number'?: string;
    public constructor() { 
    }
    public withName(name: string): TrainingExperimentResp {
        this['name'] = name;
        return this;
    }
    public withId(id: string): TrainingExperimentResp {
        this['id'] = id;
        return this;
    }
    public withSerialNumber(serialNumber: string): TrainingExperimentResp {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
}