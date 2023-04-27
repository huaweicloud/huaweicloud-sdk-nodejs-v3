import { AccessConfigTimeOffsetCreate } from './AccessConfigTimeOffsetCreate';


export class AccessConfigWindowsLogInfoCreate {
    public categorys: Array<AccessConfigWindowsLogInfoCreateCategorysEnum>;
    private 'time_offset': AccessConfigTimeOffsetCreate | undefined;
    private 'event_level': Array<AccessConfigWindowsLogInfoCreateEventLevelEnum> | undefined;
    public constructor(categorys?: any, timeOffset?: any, eventLevel?: any) { 
        this['categorys'] = categorys;
        this['time_offset'] = timeOffset;
        this['event_level'] = eventLevel;
    }
    public withCategorys(categorys: Array<AccessConfigWindowsLogInfoCreateCategorysEnum>): AccessConfigWindowsLogInfoCreate {
        this['categorys'] = categorys;
        return this;
    }
    public withTimeOffset(timeOffset: AccessConfigTimeOffsetCreate): AccessConfigWindowsLogInfoCreate {
        this['time_offset'] = timeOffset;
        return this;
    }
    public set timeOffset(timeOffset: AccessConfigTimeOffsetCreate | undefined) {
        this['time_offset'] = timeOffset;
    }
    public get timeOffset() {
        return this['time_offset'];
    }
    public withEventLevel(eventLevel: Array<AccessConfigWindowsLogInfoCreateEventLevelEnum>): AccessConfigWindowsLogInfoCreate {
        this['event_level'] = eventLevel;
        return this;
    }
    public set eventLevel(eventLevel: Array<AccessConfigWindowsLogInfoCreateEventLevelEnum> | undefined) {
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
