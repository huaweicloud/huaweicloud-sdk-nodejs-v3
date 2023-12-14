

export class MigrationRabbitVhostMetadata {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): MigrationRabbitVhostMetadata {
        this['name'] = name;
        return this;
    }
}