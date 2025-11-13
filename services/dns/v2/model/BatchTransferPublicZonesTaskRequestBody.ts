

export class BatchTransferPublicZonesTaskRequestBody {
    private 'zone_names'?: Array<string>;
    private 'target_user'?: string;
    public constructor(zoneNames?: Array<string>, targetUser?: string) { 
        this['zone_names'] = zoneNames;
        this['target_user'] = targetUser;
    }
    public withZoneNames(zoneNames: Array<string>): BatchTransferPublicZonesTaskRequestBody {
        this['zone_names'] = zoneNames;
        return this;
    }
    public set zoneNames(zoneNames: Array<string>  | undefined) {
        this['zone_names'] = zoneNames;
    }
    public get zoneNames(): Array<string> | undefined {
        return this['zone_names'];
    }
    public withTargetUser(targetUser: string): BatchTransferPublicZonesTaskRequestBody {
        this['target_user'] = targetUser;
        return this;
    }
    public set targetUser(targetUser: string  | undefined) {
        this['target_user'] = targetUser;
    }
    public get targetUser(): string | undefined {
        return this['target_user'];
    }
}