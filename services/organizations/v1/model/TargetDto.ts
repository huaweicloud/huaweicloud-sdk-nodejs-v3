

export class TargetDto {
    public type?: string;
    public entity?: string;
    public constructor(type?: string, entity?: string) { 
        this['type'] = type;
        this['entity'] = entity;
    }
    public withType(type: string): TargetDto {
        this['type'] = type;
        return this;
    }
    public withEntity(entity: string): TargetDto {
        this['entity'] = entity;
        return this;
    }
}