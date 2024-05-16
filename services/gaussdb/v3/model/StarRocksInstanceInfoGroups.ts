import { StarRocksInstanceInfoNodes } from './StarRocksInstanceInfoNodes';


export class StarRocksInstanceInfoGroups {
    public id?: string;
    public name?: string;
    public nodes?: Array<StarRocksInstanceInfoNodes>;
    private 'group_type_name'?: string;
    private 'group_node_type'?: string;
    public constructor() { 
    }
    public withId(id: string): StarRocksInstanceInfoGroups {
        this['id'] = id;
        return this;
    }
    public withName(name: string): StarRocksInstanceInfoGroups {
        this['name'] = name;
        return this;
    }
    public withNodes(nodes: Array<StarRocksInstanceInfoNodes>): StarRocksInstanceInfoGroups {
        this['nodes'] = nodes;
        return this;
    }
    public withGroupTypeName(groupTypeName: string): StarRocksInstanceInfoGroups {
        this['group_type_name'] = groupTypeName;
        return this;
    }
    public set groupTypeName(groupTypeName: string  | undefined) {
        this['group_type_name'] = groupTypeName;
    }
    public get groupTypeName(): string | undefined {
        return this['group_type_name'];
    }
    public withGroupNodeType(groupNodeType: string): StarRocksInstanceInfoGroups {
        this['group_node_type'] = groupNodeType;
        return this;
    }
    public set groupNodeType(groupNodeType: string  | undefined) {
        this['group_node_type'] = groupNodeType;
    }
    public get groupNodeType(): string | undefined {
        return this['group_node_type'];
    }
}