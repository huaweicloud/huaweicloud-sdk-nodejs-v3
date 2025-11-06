

export class AddProtectAccessLevel {
    private 'push_access_level'?: AddProtectAccessLevelPushAccessLevelEnum | number;
    private 'merge_access_level'?: AddProtectAccessLevelMergeAccessLevelEnum | number;
    public constructor(pushAccessLevel?: number, mergeAccessLevel?: number) { 
        this['push_access_level'] = pushAccessLevel;
        this['merge_access_level'] = mergeAccessLevel;
    }
    public withPushAccessLevel(pushAccessLevel: AddProtectAccessLevelPushAccessLevelEnum | number): AddProtectAccessLevel {
        this['push_access_level'] = pushAccessLevel;
        return this;
    }
    public set pushAccessLevel(pushAccessLevel: AddProtectAccessLevelPushAccessLevelEnum | number  | undefined) {
        this['push_access_level'] = pushAccessLevel;
    }
    public get pushAccessLevel(): AddProtectAccessLevelPushAccessLevelEnum | number | undefined {
        return this['push_access_level'];
    }
    public withMergeAccessLevel(mergeAccessLevel: AddProtectAccessLevelMergeAccessLevelEnum | number): AddProtectAccessLevel {
        this['merge_access_level'] = mergeAccessLevel;
        return this;
    }
    public set mergeAccessLevel(mergeAccessLevel: AddProtectAccessLevelMergeAccessLevelEnum | number  | undefined) {
        this['merge_access_level'] = mergeAccessLevel;
    }
    public get mergeAccessLevel(): AddProtectAccessLevelMergeAccessLevelEnum | number | undefined {
        return this['merge_access_level'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddProtectAccessLevelPushAccessLevelEnum {
    NUMBER_0 = 0,
    NUMBER_30 = 30,
    NUMBER_40 = 40
}
/**
    * @export
    * @enum {string}
    */
export enum AddProtectAccessLevelMergeAccessLevelEnum {
    NUMBER_0 = 0,
    NUMBER_30 = 30,
    NUMBER_40 = 40
}
