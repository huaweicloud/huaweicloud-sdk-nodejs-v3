

export class UpdateMaterialRequestDTO {
    public materialName?: string;
    public constructor() { 
    }
    public withMaterialName(materialName: string): UpdateMaterialRequestDTO {
        this['materialName'] = materialName;
        return this;
    }
}