import { AccessConfigTimeOffsetCreate } from './AccessConfigTimeOffsetCreate';


export class AccessConfigWindowsLogInfoCreate {
    public categorys?: Array<AccessConfigWindowsLogInfoCreateCategorysEnum> | Array<string>;
    private 'time_offset'?: AccessConfigTimeOffsetCreate;
    private 'event_level'?: Array<AccessConfigWindowsLogInfoCreateEventLevelEnum> | Array<string>;
    public constructor(categorys?: Array<string>, timeOffset?: AccessConfigTimeOffsetCreate, eventLevel?: Array<string>) { 
        this['categorys'] = categorys;
        this['time_offset'] = timeOffset;
        this['event_level'] = eventLevel;
    }
    public withCategorys(categorys: Array<AccessConfigWindowsLogInfoCreateCategorysEnum> | Array<string>): AccessConfigWindowsLogInfoCreate {
        this['categorys'] = categorys;
        return this;
    }
    public withTimeOffset(timeOffset: AccessConfigTimeOffsetCreate): AccessConfigWindowsLogInfoCreate {
        this['time_offset'] = timeOffset;
        return this;
    }
    public set timeOffset(timeOffset: AccessConfigTimeOffsetCreate  | undefined) {
        this['time_offset'] = timeOffset;
    }
    public get timeOffset(): AccessConfigTimeOffsetCreate | undefined {
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
