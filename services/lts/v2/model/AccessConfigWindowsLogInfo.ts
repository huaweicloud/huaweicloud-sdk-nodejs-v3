import { AccessConfigTimeOffset } from './AccessConfigTimeOffset';


export class AccessConfigWindowsLogInfo {
    public categorys?: Array<AccessConfigWindowsLogInfoCategorysEnum>;
    private 'time_offset'?: AccessConfigTimeOffset | undefined;
    private 'event_level'?: Array<AccessConfigWindowsLogInfoEventLevelEnum> | undefined;
    public constructor() { 
    }
    public withCategorys(categorys: Array<AccessConfigWindowsLogInfoCategorysEnum>): AccessConfigWindowsLogInfo {
        this['categorys'] = categorys;
        return this;
    }
    public withTimeOffset(timeOffset: AccessConfigTimeOffset): AccessConfigWindowsLogInfo {
        this['time_offset'] = timeOffset;
        return this;
    }
    public set timeOffset(timeOffset: AccessConfigTimeOffset | undefined) {
        this['time_offset'] = timeOffset;
    }
    public get timeOffset() {
        return this['time_offset'];
    }
    public withEventLevel(eventLevel: Array<AccessConfigWindowsLogInfoEventLevelEnum>): AccessConfigWindowsLogInfo {
        this['event_level'] = eventLevel;
        return this;
    }
    public set eventLevel(eventLevel: Array<AccessConfigWindowsLogInfoEventLevelEnum> | undefined) {
        this['event_level'] = eventLevel;
    }
    public get eventLevel() {
        return this['event_level'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigWindowsLogInfoCategorysEnum {
    APPLICATION = 'Application',
    SYSTEM = 'System',
    SECURITY = 'Security',
    SETUP = 'Setup'
}
/**
    * @export
    * @enum {string}
    */
export enum AccessConfigWindowsLogInfoEventLevelEnum {
    INFORMATION = 'information',
    WARNING = 'warning',
    ERROR = 'error',
    CRITICAL = 'critical',
    VERBOSE = 'verbose'
}
