

export class ListProtectableRequest {
    public limit?: number;
    public marker?: string;
    public name?: string;
    public offset?: number;
    private 'protectable_type': ListProtectableRequestProtectableTypeEnum | undefined;
    public status?: string;
    public id?: string;
    private 'server_id'?: string | undefined;
    public constructor(protectableType?: any) { 
        this['protectable_type'] = protectableType;
    }
    public withLimit(limit: number): ListProtectableRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListProtectableRequest {
        this['marker'] = marker;
        return this;
    }
    public withName(name: string): ListProtectableRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListProtectableRequest {
        this['offset'] = offset;
        return this;
    }
    public withProtectableType(protectableType: ListProtectableRequestProtectableTypeEnum): ListProtectableRequest {
        this['protectable_type'] = protectableType;
        return this;
    }
    public set protectableType(protectableType: ListProtectableRequestProtectableTypeEnum | undefined) {
        this['protectable_type'] = protectableType;
    }
    public get protectableType() {
        return this['protectable_type'];
    }
    public withStatus(status: string): ListProtectableRequest {
        this['status'] = status;
        return this;
    }
    public withId(id: string): ListProtectableRequest {
        this['id'] = id;
        return this;
    }
    public withServerId(serverId: string): ListProtectableRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListProtectableRequestProtectableTypeEnum {
    SERVER = 'server',
    DISK = 'disk'
}
