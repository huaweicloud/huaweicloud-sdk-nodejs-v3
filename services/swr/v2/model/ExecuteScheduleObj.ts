

export class ExecuteScheduleObj {
    public type?: ExecuteScheduleObjTypeEnum | string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withType(type: ExecuteScheduleObjTypeEnum | string): ExecuteScheduleObj {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExecuteScheduleObjTypeEnum {
    MANUAL = 'Manual'
}
