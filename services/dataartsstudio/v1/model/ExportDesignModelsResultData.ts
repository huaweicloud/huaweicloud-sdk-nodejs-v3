

export class ExportDesignModelsResultData {
    public uuid?: string;
    public constructor() { 
    }
    public withUuid(uuid: string): ExportDesignModelsResultData {
        this['uuid'] = uuid;
        return this;
    }
}