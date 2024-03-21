

export class LogicEntityNodes {
    private 'logic_entity_guid'?: string;
    private 'logic_entity_name'?: string;
    public constructor() { 
    }
    public withLogicEntityGuid(logicEntityGuid: string): LogicEntityNodes {
        this['logic_entity_guid'] = logicEntityGuid;
        return this;
    }
    public set logicEntityGuid(logicEntityGuid: string  | undefined) {
        this['logic_entity_guid'] = logicEntityGuid;
    }
    public get logicEntityGuid(): string | undefined {
        return this['logic_entity_guid'];
    }
    public withLogicEntityName(logicEntityName: string): LogicEntityNodes {
        this['logic_entity_name'] = logicEntityName;
        return this;
    }
    public set logicEntityName(logicEntityName: string  | undefined) {
        this['logic_entity_name'] = logicEntityName;
    }
    public get logicEntityName(): string | undefined {
        return this['logic_entity_name'];
    }
}