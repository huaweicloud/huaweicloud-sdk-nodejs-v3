

export class BizAppParam {
    public description?: string;
    private 'display_name'?: string;
    private 'eps_id'?: string;
    public name?: string;
    private 'register_type'?: BizAppParamRegisterTypeEnum | string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withDescription(description: string): BizAppParam {
        this['description'] = description;
        return this;
    }
    public withDisplayName(displayName: string): BizAppParam {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withEpsId(epsId: string): BizAppParam {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withName(name: string): BizAppParam {
        this['name'] = name;
        return this;
    }
    public withRegisterType(registerType: BizAppParamRegisterTypeEnum | string): BizAppParam {
        this['register_type'] = registerType;
        return this;
    }
    public set registerType(registerType: BizAppParamRegisterTypeEnum | string  | undefined) {
        this['register_type'] = registerType;
    }
    public get registerType(): BizAppParamRegisterTypeEnum | string | undefined {
        return this['register_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BizAppParamRegisterTypeEnum {
    API = 'API',
    CONSOLE = 'CONSOLE',
    SERVICE_DISCOVERY = 'SERVICE_DISCOVERY'
}
