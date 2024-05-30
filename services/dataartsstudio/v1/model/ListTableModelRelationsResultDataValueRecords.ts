import { RelationVO } from './RelationVO';
import { TableModelVO } from './TableModelVO';


export class ListTableModelRelationsResultDataValueRecords {
    public tables?: Array<TableModelVO>;
    public inheritances?: Array<object>;
    public relations?: Array<RelationVO>;
    public constructor() { 
    }
    public withTables(tables: Array<TableModelVO>): ListTableModelRelationsResultDataValueRecords {
        this['tables'] = tables;
        return this;
    }
    public withInheritances(inheritances: Array<object>): ListTableModelRelationsResultDataValueRecords {
        this['inheritances'] = inheritances;
        return this;
    }
    public withRelations(relations: Array<RelationVO>): ListTableModelRelationsResultDataValueRecords {
        this['relations'] = relations;
        return this;
    }
}