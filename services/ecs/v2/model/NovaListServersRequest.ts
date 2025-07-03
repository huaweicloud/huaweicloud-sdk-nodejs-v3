

export class NovaListServersRequest {
    private 'changes-since'?: string;
    public flavor?: string;
    public host?: string;
    public image?: string;
    public ip?: string;
    public limit?: number;
    public marker?: string;
    public name?: string;
    private 'not-tags'?: string;
    private 'reservation_id'?: string;
    private 'sort_key'?: NovaListServersRequestSortKeyEnum | string;
    public status?: NovaListServersRequestStatusEnum | string;
    public tags?: string;
    private 'OpenStack-API-Version'?: string;
    public constructor() { 
    }
    public withChangesSince(changesSince: string): NovaListServersRequest {
        this['changes-since'] = changesSince;
        return this;
    }
    public set changesSince(changesSince: string  | undefined) {
        this['changes-since'] = changesSince;
    }
    public get changesSince(): string | undefined {
        return this['changes-since'];
    }
    public withFlavor(flavor: string): NovaListServersRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withHost(host: string): NovaListServersRequest {
        this['host'] = host;
        return this;
    }
    public withImage(image: string): NovaListServersRequest {
        this['image'] = image;
        return this;
    }
    public withIp(ip: string): NovaListServersRequest {
        this['ip'] = ip;
        return this;
    }
    public withLimit(limit: number): NovaListServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): NovaListServersRequest {
        this['marker'] = marker;
        return this;
    }
    public withName(name: string): NovaListServersRequest {
        this['name'] = name;
        return this;
    }
    public withNotTags(notTags: string): NovaListServersRequest {
        this['not-tags'] = notTags;
        return this;
    }
    public set notTags(notTags: string  | undefined) {
        this['not-tags'] = notTags;
    }
    public get notTags(): string | undefined {
        return this['not-tags'];
    }
    public withReservationId(reservationId: string): NovaListServersRequest {
        this['reservation_id'] = reservationId;
        return this;
    }
    public set reservationId(reservationId: string  | undefined) {
        this['reservation_id'] = reservationId;
    }
    public get reservationId(): string | undefined {
        return this['reservation_id'];
    }
    public withSortKey(sortKey: NovaListServersRequestSortKeyEnum | string): NovaListServersRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: NovaListServersRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): NovaListServersRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withStatus(status: NovaListServersRequestStatusEnum | string): NovaListServersRequest {
        this['status'] = status;
        return this;
    }
    public withTags(tags: string): NovaListServersRequest {
        this['tags'] = tags;
        return this;
    }
    public withOpenStackAPIVersion(openStackAPIVersion: string): NovaListServersRequest {
        this['OpenStack-API-Version'] = openStackAPIVersion;
        return this;
    }
    public set openStackAPIVersion(openStackAPIVersion: string  | undefined) {
        this['OpenStack-API-Version'] = openStackAPIVersion;
    }
    public get openStackAPIVersion(): string | undefined {
        return this['OpenStack-API-Version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NovaListServersRequestSortKeyEnum {
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
export enum NovaListServersRequestStatusEnum {
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
