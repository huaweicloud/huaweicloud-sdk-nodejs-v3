import { AssociateErInstanceDocument } from './AssociateErInstanceDocument';
import { AssociateErTableDocument } from './AssociateErTableDocument';
import { Name } from './Name';


export class CentralNetworkPlaneDocument {
    public name?: string;
    private 'associate_er_tables'?: Array<AssociateErTableDocument>;
    private 'exclude_er_connections'?: Array<Array<AssociateErInstanceDocument>>;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CentralNetworkPlaneDocument {
        this['name'] = name;
        return this;
    }
    public withAssociateErTables(associateErTables: Array<AssociateErTableDocument>): CentralNetworkPlaneDocument {
        this['associate_er_tables'] = associateErTables;
        return this;
    }
    public set associateErTables(associateErTables: Array<AssociateErTableDocument>  | undefined) {
        this['associate_er_tables'] = associateErTables;
    }
    public get associateErTables(): Array<AssociateErTableDocument> | undefined {
        return this['associate_er_tables'];
    }
    public withExcludeErConnections(excludeErConnections: Array<Array<AssociateErInstanceDocument>>): CentralNetworkPlaneDocument {
        this['exclude_er_connections'] = excludeErConnections;
        return this;
    }
    public set excludeErConnections(excludeErConnections: Array<Array<AssociateErInstanceDocument>>  | undefined) {
        this['exclude_er_connections'] = excludeErConnections;
    }
    public get excludeErConnections(): Array<Array<AssociateErInstanceDocument>> | undefined {
        return this['exclude_er_connections'];
    }
}