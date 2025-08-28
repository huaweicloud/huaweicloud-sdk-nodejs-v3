import { NodeInfo } from './NodeInfo';


export class CreateGroupRequestBody {
    public name?: string;
    public type?: CreateGroupRequestBodyTypeEnum | string;
    private 'flavor_id'?: string;
    public nodes?: Array<NodeInfo>;
    public constructor(name?: string, type?: string, flavorId?: string, nodes?: Array<NodeInfo>) { 
        this['name'] = name;
        this['type'] = type;
        this['flavor_id'] = flavorId;
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
