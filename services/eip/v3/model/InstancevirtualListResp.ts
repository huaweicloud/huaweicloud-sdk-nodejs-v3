import { NexthopDict } from './NexthopDict';


export class InstancevirtualListResp {
    public id?: string;
    public owner?: string;
    public location?: string;
    private 'forward_mode'?: InstancevirtualListRespForwardModeEnum | string;
    private 'cluster_id'?: string;
    private 'hash_mode'?: InstancevirtualListRespHashModeEnum | string;
    public type?: InstancevirtualListRespTypeEnum | string;
    public vni?: number;
    public nexthops?: Array<NexthopDict>;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: string): InstancevirtualListResp {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: string): InstancevirtualListResp {
        this['owner'] = owner;
        return this;
    }
    public withLocation(location: string): InstancevirtualListResp {
        this['location'] = location;
        return this;
    }
    public withForwardMode(forwardMode: InstancevirtualListRespForwardModeEnum | string): InstancevirtualListResp {
        this['forward_mode'] = forwardMode;
        return this;
    }
    public set forwardMode(forwardMode: InstancevirtualListRespForwardModeEnum | string  | undefined) {
        this['forward_mode'] = forwardMode;
    }
    public get forwardMode(): InstancevirtualListRespForwardModeEnum | string | undefined {
        return this['forward_mode'];
    }
    public withClusterId(clusterId: string): InstancevirtualListResp {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withHashMode(hashMode: InstancevirtualListRespHashModeEnum | string): InstancevirtualListResp {
        this['hash_mode'] = hashMode;
        return this;
    }
    public set hashMode(hashMode: InstancevirtualListRespHashModeEnum | string  | undefined) {
        this['hash_mode'] = hashMode;
    }
    public get hashMode(): InstancevirtualListRespHashModeEnum | string | undefined {
        return this['hash_mode'];
    }
    public withType(type: InstancevirtualListRespTypeEnum | string): InstancevirtualListResp {
        this['type'] = type;
        return this;
    }
    public withVni(vni: number): InstancevirtualListResp {
        this['vni'] = vni;
        return this;
    }
    public withNexthops(nexthops: Array<NexthopDict>): InstancevirtualListResp {
        this['nexthops'] = nexthops;
        return this;
    }
    public withCreatedAt(createdAt: string): InstancevirtualListResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): InstancevirtualListResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InstancevirtualListRespForwardModeEnum {
    ACTIVE_ACTIVE = 'ACTIVE-ACTIVE',
    ACTIVE_STANDBY = 'ACTIVE-STANDBY'
}
/**
    * @export
    * @enum {string}
    */
export enum InstancevirtualListRespHashModeEnum {
    E_2_TUPLE = '2_TUPLE',
    E_3_TUPLE = '3_TUPLE',
    E_5_TUPLE = '5_TUPLE'
}
/**
    * @export
    * @enum {string}
    */
export enum InstancevirtualListRespTypeEnum {
    VLAN = 'VLAN',
    VXLAN = 'VXLAN'
}
