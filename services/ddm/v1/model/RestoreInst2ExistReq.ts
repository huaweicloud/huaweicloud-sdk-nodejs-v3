import { DataNodeRelation } from './DataNodeRelation';
import { RestoreInstSource } from './RestoreInstSource';
import { RestoreInstTarget } from './RestoreInstTarget';


export class RestoreInst2ExistReq {
    public source?: RestoreInstSource;
    public target?: RestoreInstTarget;
    private 'data_node_relations'?: Array<DataNodeRelation>;
    public constructor(source?: RestoreInstSource, target?: RestoreInstTarget, dataNodeRelations?: Array<DataNodeRelation>) { 
        this['source'] = source;
        this['target'] = target;
        this['data_node_relations'] = dataNodeRelations;
    }
    public withSource(source: RestoreInstSource): RestoreInst2ExistReq {
        this['source'] = source;
        return this;
    }
    public withTarget(target: RestoreInstTarget): RestoreInst2ExistReq {
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