

export class TPMInfoDTO {
    private 'manufacture_id'?: string;
    private 'spec_version'?: string;
    public constructor() { 
    }
    public withManufactureId(manufactureId: string): TPMInfoDTO {
        this['manufacture_id'] = manufactureId;
        return this;
    }
    public set manufactureId(manufactureId: string  | undefined) {
        this['manufacture_id'] = manufactureId;
    }
    public get manufactureId(): string | undefined {
        return this['manufacture_id'];
    }
    public withSpecVersion(specVersion: string): TPMInfoDTO {
        this['spec_version'] = specVersion;
        return this;
    }
    public set specVersion(specVersion: string  | undefined) {
        this['spec_version'] = specVersion;
    }
    public get specVersion(): string | undefined {
        return this['spec_version'];
    }
}