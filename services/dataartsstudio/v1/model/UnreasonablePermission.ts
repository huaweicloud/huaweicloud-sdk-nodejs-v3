

export class UnreasonablePermission {
    public result?: UnreasonablePermissionResultEnum | string;
    public count?: number;
    public constructor() { 
    }
    public withResult(result: UnreasonablePermissionResultEnum | string): UnreasonablePermission {
        this['result'] = result;
        return this;
    }
    public withCount(count: number): UnreasonablePermission {
        this['count'] = count;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UnreasonablePermissionResultEnum {
    NO_RISK = 'NO_RISK',
    MEDIUM_RISK = 'MEDIUM_RISK',
    HIGH_RISK = 'HIGH_RISK',
    NOT_SCANNED = 'NOT_SCANNED'
}
