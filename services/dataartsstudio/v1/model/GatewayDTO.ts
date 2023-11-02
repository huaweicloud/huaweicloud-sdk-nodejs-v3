

export class GatewayDTO {
    private 'apig_type'?: GatewayDTOApigTypeEnum | string;
    private 'apig_instance_id'?: string;
    private 'group_id_in_apig'?: string;
    private 'roma_app_id'?: string;
    public constructor() { 
    }
    public withApigType(apigType: GatewayDTOApigTypeEnum | string): GatewayDTO {
        this['apig_type'] = apigType;
        return this;
    }
    public set apigType(apigType: GatewayDTOApigTypeEnum | string  | undefined) {
        this['apig_type'] = apigType;
    }
    public get apigType(): GatewayDTOApigTypeEnum | string | undefined {
        return this['apig_type'];
    }
    public withApigInstanceId(apigInstanceId: string): GatewayDTO {
        this['apig_instance_id'] = apigInstanceId;
        return this;
    }
    public set apigInstanceId(apigInstanceId: string  | undefined) {
        this['apig_instance_id'] = apigInstanceId;
    }
    public get apigInstanceId(): string | undefined {
        return this['apig_instance_id'];
    }
    public withGroupIdInApig(groupIdInApig: string): GatewayDTO {
        this['group_id_in_apig'] = groupIdInApig;
        return this;
    }
    public set groupIdInApig(groupIdInApig: string  | undefined) {
        this['group_id_in_apig'] = groupIdInApig;
    }
    public get groupIdInApig(): string | undefined {
        return this['group_id_in_apig'];
    }
    public withRomaAppId(romaAppId: string): GatewayDTO {
        this['roma_app_id'] = romaAppId;
        return this;
    }
    public set romaAppId(romaAppId: string  | undefined) {
        this['roma_app_id'] = romaAppId;
    }
    public get romaAppId(): string | undefined {
        return this['roma_app_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GatewayDTOApigTypeEnum {
    APIG = 'APIG',
    APIGW = 'APIGW',
    ROMA_APIC = 'ROMA_APIC'
}
