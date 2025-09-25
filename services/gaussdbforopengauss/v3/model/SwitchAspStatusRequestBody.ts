

export class SwitchAspStatusRequestBody {
    public status?: SwitchAspStatusRequestBodyStatusEnum | string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: SwitchAspStatusRequestBodyStatusEnum | string): SwitchAspStatusRequestBody {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchAspStatusRequestBodyStatusEnum {
    ON = 'ON',
    OFF = 'OFF'
}
