

export class MysqlUpdateInstanceNameRequest {
    public name?: string;
    private 'is_modify_node_name'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): MysqlUpdateInstanceNameRequest {
        this['name'] = name;
        return this;
    }
    public withIsModifyNodeName(isModifyNodeName: string): MysqlUpdateInstanceNameRequest {
        this['is_modify_node_name'] = isModifyNodeName;
        return this;
    }
    public set isModifyNodeName(isModifyNodeName: string  | undefined) {
        this['is_modify_node_name'] = isModifyNodeName;
    }
    public get isModifyNodeName(): string | undefined {
        return this['is_modify_node_name'];
    }
}