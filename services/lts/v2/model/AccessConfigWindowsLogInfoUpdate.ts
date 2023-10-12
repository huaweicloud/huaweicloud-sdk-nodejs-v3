import { AccessConfigTimeOffsetCreate } from './AccessConfigTimeOffsetCreate';


export class AccessConfigWindowsLogInfoUpdate {
    public categorys?: Array<AccessConfigWindowsLogInfoUpdateCategorysEnum> | Array<string>;
    private 'time_offset'?: AccessConfigTimeOffsetCreate;
    private 'event_level'?: Array<AccessConfigWindowsLogInfoUpdateEventLevelEnum> | Array<string>;
    public constructor() { 
    }
    public withCategorys(categorys: Array<AccessConfigWindowsLogInfoUpdateCategorysEnum> | Array<string>): AccessConfigWindowsLogInfoUpdate {
        this['categorys'] = categorys;
        return this;
    }
    public withTimeOffset(timeOffset: AccessConfigTimeOffsetCreate): AccessConfigWindowsLogInfoUpdate {
        this['time_offset'] = timeOffset;
        return this;
    }
    public set timeOffset(timeOffset: AccessConfigTimeOffsetCreate  | undefined) {
        this['time_offset'] = timeOffset;
    }
    public get timeOffset(): AccessConfigTimeOffsetCreate | undefined {
        return this['time_offset'];
    }
    public withEventLevel(eventLevel: Array<AccessConfigWindowsLogInfoUpdateEventLevelEnum> | Array<string>): AccessConfigWindowsLogInfoUpdate {
        this['event_level'] = eventLevel;
        return this;
    }
    public set eventLevel(eventLevel: Array<AccessConfigWindowsLogInfoUpdateEventLevelEnum> | Array<string>  | undefined) {
        this['event_level'] = eventLevel;
    }
    public get eventLevel(): Array<AccessConfigWindowsLogInfoUpdateEventLevelEnum> | Array<string> | undefined {
        return this['event_level'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigWindowsLogInfoUpdateCategorysEnum {
    APPLICATION = 'Application',
    SYSTEM = 'System',
    SECURITY = 'Security',
    SETUP = 'Setup'
}
/**
    * @export
    * @enum {string}
    */
export enum AccessConfigWindowsLogInfoUpdateEventLevelEnum {
    INFORMATION = 'information',
    WARNING = 'warning',
    ERROR = 'error',
    CRITICAL = 'critical',
    VERBOSE = 'verbose'
}
