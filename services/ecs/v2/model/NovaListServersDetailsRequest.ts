

export class NovaListServersDetailsRequest {
    private 'changes-since'?: string | undefined;
    public flavor?: string;
    public image?: string;
    public ip?: string;
    public limit?: number;
    public marker?: string;
    public name?: string;
    private 'not-tags'?: string | undefined;
    private 'reservation_id'?: string | undefined;
    private 'sort_key'?: NovaListServersDetailsRequestSortKeyEnum | undefined;
    public status?: NovaListServersDetailsRequestStatusEnum;
    public tags?: string;
    private 'OpenStack-API-Version'?: string | undefined;
    public constructor() { 
    }
    public withChangesSince(changesSince: string): NovaListServersDetailsRequest {
        this['changes-since'] = changesSince;
        return this;
    }
    public set changesSince(changesSince: string | undefined) {
        this['changes-since'] = changesSince;
    }
    public get changesSince() {
        return this['changes-since'];
    }
    public withFlavor(flavor: string): NovaListServersDetailsRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withImage(image: string): NovaListServersDetailsRequest {
        this['image'] = image;
        return this;
    }
    public withIp(ip: string): NovaListServersDetailsRequest {
        this['ip'] = ip;
        return this;
    }
    public withLimit(limit: number): NovaListServersDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): NovaListServersDetailsRequest {
        this['marker'] = marker;
        return this;
    }
    public withName(name: string): NovaListServersDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withNotTags(notTags: string): NovaListServersDetailsRequest {
        this['not-tags'] = notTags;
        return this;
    }
    public set notTags(notTags: string | undefined) {
        this['not-tags'] = notTags;
    }
    public get notTags() {
        return this['not-tags'];
    }
    public withReservationId(reservationId: string): NovaListServersDetailsRequest {
        this['reservation_id'] = reservationId;
        return this;
    }
    public set reservationId(reservationId: string | undefined) {
        this['reservation_id'] = reservationId;
    }
    public get reservationId() {
        return this['reservation_id'];
    }
    public withSortKey(sortKey: NovaListServersDetailsRequestSortKeyEnum): NovaListServersDetailsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: NovaListServersDetailsRequestSortKeyEnum | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withStatus(status: NovaListServersDetailsRequestStatusEnum): NovaListServersDetailsRequest {
        this['status'] = status;
        return this;
    }
    public withTags(tags: string): NovaListServersDetailsRequest {
        this['tags'] = tags;
        return this;
    }
    public withOpenStackAPIVersion(openStackAPIVersion: string): NovaListServersDetailsRequest {
        this['OpenStack-API-Version'] = openStackAPIVersion;
        return this;
    }
    public set openStackAPIVersion(openStackAPIVersion: string | undefined) {
        this['OpenStack-API-Version'] = openStackAPIVersion;
    }
    public get openStackAPIVersion() {
        return this['OpenStack-API-Version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NovaListServersDetailsRequestSortKeyEnum {
    CREATED_AT = 'created_at',
    AVAILABILITY_ZONE = 'availability_zone',
    DISPLAY_NAME = 'display_name',
    HOST = 'host',
    INSTANCE_TYPE_ID = 'instance_type_id',
    KEY_NAME = 'key_name',
    PROJECT_ID = 'project_id',
    USER_ID = 'user_id',
    UPDATED_AT = 'updated_at',
    UUID = 'uuid',
    VM_STATE = 'vm_state'
}
/**
    * @export
    * @enum {string}
    */
export enum NovaListServersDetailsRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    BUILD = 'BUILD',
    DELETED = 'DELETED',
    ERROR = 'ERROR',
    HARD_REBOOT = 'HARD_REBOOT',
    MIGRATING = 'MIGRATING',
    REBOOT = 'REBOOT',
    RESIZE = 'RESIZE',
    REVERT_RESIZE = 'REVERT_RESIZE',
    SHELVED = 'SHELVED',
    SHELVED_OFFLOADED = 'SHELVED_OFFLOADED',
    SHUTOFF = 'SHUTOFF',
    UNKNOWN = 'UNKNOWN',
    VERIFY_RESIZE = 'VERIFY_RESIZE'
}
