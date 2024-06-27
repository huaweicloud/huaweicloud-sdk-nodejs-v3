import { ClickHouseNodeInfo } from './ClickHouseNodeInfo';


export class ChInstancesInfoRsponseInstanceGroups {
    public id?: string;
    public name?: string;
    private 'group_type_name'?: string;
    public nodes?: Array<ClickHouseNodeInfo>;
    public constructor(id?: string, name?: string, groupTypeName?: string, nodes?: Array<ClickHouseNodeInfo>) { 
        this['id'] = id;
        this['name'] = name;
        this['group_type_name'] = groupTypeName;
        this['nodes'] = nodes;
    }
    public withId(id: string): ChInstancesInfoRsponseInstanceGroups {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ChInstancesInfoRsponseInstanceGroups {
        this['name'] = name;
        return this;
    }
    public withGroupTypeName(groupTypeName: string): ChInstancesInfoRsponseInstanceGroups {
        this['group_type_name'] = groupTypeName;
        return this;
    }
    public set groupTypeName(groupTypeName: string  | undefined) {
        this['group_type_name'] = groupTypeName;
    }
    public get groupTypeName(): string | undefined {
        return this['group_type_name'];
    }
    public withNodes(nodes: Array<ClickHouseNodeInfo>): ChInstancesInfoRsponseInstanceGroups {
        this['nodes'] = nodes;
        return this;
    }
}