import { MapObject } from './MapObject';


export class FunctionConfig {
    public id?: string;
    public name?: string;
    public status?: FunctionConfigStatusEnum | string;
    public values?: Array<MapObject>;
    public constructor() { 
    }
    public withId(id: string): FunctionConfig {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FunctionConfig {
        this['name'] = name;
        return this;
    }
    public withStatus(status: FunctionConfigStatusEnum | string): FunctionConfig {
        this['status'] = status;
        return this;
    }
    public withValues(values: Array<MapObject>): FunctionConfig {
        this['values'] = values;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FunctionConfigStatusEnum {
    ON = 'ON',
    OFF = 'OFF'
}
