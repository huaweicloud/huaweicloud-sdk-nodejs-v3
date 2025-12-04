

export class PublicIpInfo {
    public id?: string;
    public type?: PublicIpInfoTypeEnum | string;
    private 'public_ip'?: string;
    private 'private_ip'?: string;
    private 'binding_entity_id'?: string;
    private 'binding_entity_name'?: string;
    private 'binding_entity_type'?: PublicIpInfoBindingEntityTypeEnum | string;
    public constructor() { 
    }
    public withId(id: string): PublicIpInfo {
        this['id'] = id;
        return this;
    }
    public withType(type: PublicIpInfoTypeEnum | string): PublicIpInfo {
        this['type'] = type;
        return this;
    }
    public withPublicIp(publicIp: string): PublicIpInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPrivateIp(privateIp: string): PublicIpInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withBindingEntityId(bindingEntityId: string): PublicIpInfo {
        this['binding_entity_id'] = bindingEntityId;
        return this;
    }
    public set bindingEntityId(bindingEntityId: string  | undefined) {
        this['binding_entity_id'] = bindingEntityId;
    }
    public get bindingEntityId(): string | undefined {
        return this['binding_entity_id'];
    }
    public withBindingEntityName(bindingEntityName: string): PublicIpInfo {
        this['binding_entity_name'] = bindingEntityName;
        return this;
    }
    public set bindingEntityName(bindingEntityName: string  | undefined) {
        this['binding_entity_name'] = bindingEntityName;
    }
    public get bindingEntityName(): string | undefined {
        return this['binding_entity_name'];
    }
    public withBindingEntityType(bindingEntityType: PublicIpInfoBindingEntityTypeEnum | string): PublicIpInfo {
        this['binding_entity_type'] = bindingEntityType;
        return this;
    }
    public set bindingEntityType(bindingEntityType: PublicIpInfoBindingEntityTypeEnum | string  | undefined) {
        this['binding_entity_type'] = bindingEntityType;
    }
    public get bindingEntityType(): PublicIpInfoBindingEntityTypeEnum | string | undefined {
        return this['binding_entity_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PublicIpInfoTypeEnum {
    E_5_BGPBGP = '5_bgp（全动态BGP）',
    E_5_SBGPBGP = '5_sbgp（静态BGP）'
}
/**
    * @export
    * @enum {string}
    */
export enum PublicIpInfoBindingEntityTypeEnum {
    NODE = 'node（节点）',
    NODE_GROUP = 'node_group（节点组）'
}
