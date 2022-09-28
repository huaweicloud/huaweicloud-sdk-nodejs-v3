

export class EpsUpdatePermissionDesc {
    public description: string;
    public constructor(description?: any) { 
        this['description'] = description;
    }
    public withDescription(description: string): EpsUpdatePermissionDesc {
        this['description'] = description;
        return this;
    }
}