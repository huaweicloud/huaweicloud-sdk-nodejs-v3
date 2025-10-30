

export class ImageTypeRiskInfo {
    public local?: number;
    public registriy?: number;
    public cicd?: number;
    public constructor() { 
    }
    public withLocal(local: number): ImageTypeRiskInfo {
        this['local'] = local;
        return this;
    }
    public withRegistriy(registriy: number): ImageTypeRiskInfo {
        this['registriy'] = registriy;
        return this;
    }
    public withCicd(cicd: number): ImageTypeRiskInfo {
        this['cicd'] = cicd;
        return this;
    }
}