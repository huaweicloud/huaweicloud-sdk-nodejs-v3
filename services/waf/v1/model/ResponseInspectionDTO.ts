

export class ResponseInspectionDTO {
    private 'component_type'?: ResponseInspectionDTOComponentTypeEnum | string;
    private 'json_path'?: string;
    public success?: Array<string>;
    public fail?: Array<string>;
    public constructor(componentType?: string) { 
        this['component_type'] = componentType;
    }
    public withComponentType(componentType: ResponseInspectionDTOComponentTypeEnum | string): ResponseInspectionDTO {
        this['component_type'] = componentType;
        return this;
    }
    public set componentType(componentType: ResponseInspectionDTOComponentTypeEnum | string  | undefined) {
        this['component_type'] = componentType;
    }
    public get componentType(): ResponseInspectionDTOComponentTypeEnum | string | undefined {
        return this['component_type'];
    }
    public withJsonPath(jsonPath: string): ResponseInspectionDTO {
        this['json_path'] = jsonPath;
        return this;
    }
    public set jsonPath(jsonPath: string  | undefined) {
        this['json_path'] = jsonPath;
    }
    public get jsonPath(): string | undefined {
        return this['json_path'];
    }
    public withSuccess(success: Array<string>): ResponseInspectionDTO {
        this['success'] = success;
        return this;
    }
    public withFail(fail: Array<string>): ResponseInspectionDTO {
        this['fail'] = fail;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResponseInspectionDTOComponentTypeEnum {
    JSON = 'JSON',
    STATUS_CODE = 'STATUS_CODE'
}
