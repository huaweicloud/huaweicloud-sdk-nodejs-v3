

export class AddMaterialRequestBody {
    public file?: any;
    public constructor(file?: any) { 
        this['file'] = file;
    }
    public withFile(file: any): AddMaterialRequestBody {
        this['file'] = file;
        return this;
    }
}