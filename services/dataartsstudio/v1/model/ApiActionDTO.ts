

export class ApiActionDTO {
    public time?: string;
    public action?: ApiActionDTOActionEnum | string;
    public constructor() { 
    }
    public withTime(time: string): ApiActionDTO {
        this['time'] = time;
        return this;
    }
    public withAction(action: ApiActionDTOActionEnum | string): ApiActionDTO {
        this['action'] = action;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiActionDTOActionEnum {
    UNPUBLISH = 'UNPUBLISH',
    STOP = 'STOP',
    RECOVER = 'RECOVER'
}
