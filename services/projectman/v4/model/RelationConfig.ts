import { Relation } from './Relation';


export class RelationConfig {
    public relations?: { [key: string]: Array<Relation>; };
    public constructor() { 
    }
    public withRelations(relations: { [key: string]: Array<Relation>; }): RelationConfig {
        this['relations'] = relations;
        return this;
    }
}