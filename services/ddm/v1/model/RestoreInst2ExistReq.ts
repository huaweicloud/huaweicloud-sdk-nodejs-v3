import { DataNodeRelation } from './DataNodeRelation';


export class RestoreInst2ExistReq {
    public source?: object;
    public target?: object;
    private 'data_node_relations'?: Array<DataNodeRelation>;
    public constructor() { 
    }
    public withSource(source: object): RestoreInst2ExistReq {
        this['source'] = source;
        return this;
    }
    public withTarget(target: object): RestoreInst2ExistReq {
        this['target'] = target;
        return this;
    }
    public withDataNodeRelations(dataNodeRelations: Array<DataNodeRelation>): RestoreInst2ExistReq {
        this['data_node_relations'] = dataNodeRelations;
        return this;
    }
    public set dataNodeRelations(dataNodeRelations: Array<DataNodeRelation>  | undefined) {
        this['data_node_relations'] = dataNodeRelations;
    }
    public get dataNodeRelations(): Array<DataNodeRelation> | undefined {
        return this['data_node_relations'];
    }
}