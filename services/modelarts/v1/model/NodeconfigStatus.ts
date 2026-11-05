import { NodeconfigStatusConfigsStatus } from './NodeconfigStatusConfigsStatus';


export class NodeconfigStatus {
    public phase?: NodeconfigStatusPhaseEnum | string;
    public configsStatus?: NodeconfigStatusConfigsStatus;
    public constructor(phase?: string) { 
        this['phase'] = phase;
    }
    public withPhase(phase: NodeconfigStatusPhaseEnum | string): NodeconfigStatus {
        this['phase'] = phase;
        return this;
    }
    public withConfigsStatus(configsStatus: NodeconfigStatusConfigsStatus): NodeconfigStatus {
        this['configsStatus'] = configsStatus;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeconfigStatusPhaseEnum {
    PENDING = 'Pending',
    UPDATING = 'Updating',
    RUNNING = 'Running',
    ABNORMAL = 'Abnormal',
    DELETING = 'Deleting'
}
