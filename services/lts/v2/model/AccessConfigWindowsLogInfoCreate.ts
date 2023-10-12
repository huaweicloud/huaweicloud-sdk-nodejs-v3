import { AccessConfigTimeOffset } from './AccessConfigTimeOffset';


export class AccessConfigWindowsLogInfoCreate {
    public categorys?: Array<AccessConfigWindowsLogInfoCreateCategorysEnum> | Array<string>;
    private 'time_offset'?: AccessConfigTimeOffset;
    private 'event_level'?: Array<AccessConfigWindowsLogInfoCreateEventLevelEnum> | Array<string>;
    public constructor(categorys?: Array<string>, timeOffset?: AccessConfigTimeOffset, eventLevel?: Array<string>) { 
        this['categorys'] = categorys;
        this['time_offset'] = timeOffset;
        this['event_level'] = eventLevel;
    }
    public withCategorys(categorys: Array<AccessConfigWindowsLogInfoCreateCategorysEnum> | Array<string>): AccessConfigWindowsLogInfoCreate {
        this['categorys'] = categorys;
        return this;
    }
    public withTimeOffset(timeOffset: AccessConfigTimeOffset): AccessConfigWindowsLogInfoCreate {
        this['time_offset'] = timeOffset;
        return this;
    }
    public set timeOffset(timeOffset: AccessConfigTimeOffset  | undefined) {
        this['time_offset'] = timeOffset;
    }
    public get timeOffset(): AccessConfigTimeOffset | undefined {
        return this['time_offset'];
    }
    public withEventLevel(eventLevel: Array<AccessConfigWindowsLogInfoCreateEventLevelEnum> | Array<string>): AccessConfigWindowsLogInfoCreate {
        this['event_level'] = eventLevel;
        return this;
    }
    public set eventLevel(eventLevel: Array<AccessConfigWindowsLogInfoCreateEventLevelEnum> | Array<string>  | undefined) {
        this['event_level'] = eventLevel;
    }
    public get eventLevel(): Array<AccessConfigWindowsLogInfoCreateEventLevelEnum> | Array<string> | undefined {
        return this['event_level'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigWindowsLogInfoCreateCategorysEnum {
    APPLICATION = 'Application',
    SYSTEM = 'System',
    SECURITY = 'Security',
    SETUP = 'Setup'
}
/**
    * @export
    * @enum {string}
    */
export enum AccessConfigWindowsLogInfoCreateEventLevelEnum {
    INFORMATION = 'information',
    WARNING = 'warning',
    ERROR = 'error',
    CRITICAL = 'critical',
    VERBOSE = 'verbose'
}
