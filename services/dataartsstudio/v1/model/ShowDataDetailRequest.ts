

export class ShowDataDetailRequest {
    public instance?: string;
    public guid?: string;
    private 'ignore_relationships'?: boolean;
    public constructor(instance?: string, guid?: string) { 
        this['instance'] = instance;
        this['guid'] = guid;
    }
    public withInstance(instance: string): ShowDataDetailRequest {
        this['instance'] = instance;
        return this;
    }
    public withGuid(guid: string): ShowDataDetailRequest {
        this['guid'] = guid;
        return this;
    }
    public withIgnoreRelationships(ignoreRelationships: boolean): ShowDataDetailRequest {
        this['ignore_relationships'] = ignoreRelationships;
        return this;
    }
    public set ignoreRelationships(ignoreRelationships: boolean  | undefined) {
        this['ignore_relationships'] = ignoreRelationships;
    }
    public get ignoreRelationships(): boolean | undefined {
        return this['ignore_relationships'];
    }
}