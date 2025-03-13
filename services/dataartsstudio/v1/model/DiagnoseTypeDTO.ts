

export class DiagnoseTypeDTO {
    public type?: DiagnoseTypeDTOTypeEnum | string;
    public constructor() { 
    }
    public withType(type: DiagnoseTypeDTOTypeEnum | string): DiagnoseTypeDTO {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DiagnoseTypeDTOTypeEnum {
    SENSITIVE_DATA = 'SENSITIVE_DATA',
    PERMISSION_MANAGEMENT = 'PERMISSION_MANAGEMENT',
    DATASOURCE_PROTECTION = 'DATASOURCE_PROTECTION'
}
