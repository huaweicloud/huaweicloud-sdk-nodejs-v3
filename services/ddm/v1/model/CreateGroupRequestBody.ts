import { NodeInfo } from './NodeInfo';


export class CreateGroupRequestBody {
    public name?: string;
    public type?: CreateGroupRequestBodyTypeEnum | string;
    private 'flavor_id'?: string;
    private 'flavor_ref'?: string;
    public nodes?: Array<NodeInfo>;
    public constructor(name?: string, type?: string, nodes?: Array<NodeInfo>) { 
        this['name'] = name;
        this['type'] = type;
        this['nodes'] = nodes;
    }
    public withName(name: string): CreateGroupRequestBody {
        this['name'] = name;
        return this;
    }
    public withType(type: CreateGroupRequestBodyTypeEnum | string): CreateGroupRequestBody {
        this['type'] = type;
        return this;
    }
    public withFlavorId(flavorId: string): CreateGroupRequestBody {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withFlavorRef(flavorRef: string): CreateGroupRequestBody {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withNodes(nodes: Array<NodeInfo>): CreateGroupRequestBody {
        this['nodes'] = nodes;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateGroupRequestBodyTypeEnum {
    RW = 'rw',
    R = 'r'
}
