import { InstanceActionParameters } from './InstanceActionParameters';
import { InstanceActionType } from './InstanceActionType';


export class InstanceAction {
    public action?: InstanceActionType;
    public parameters?: InstanceActionParameters;
    public constructor(action?: InstanceActionType) { 
        this['action'] = action;
    }
    public withAction(action: InstanceActionType): InstanceAction {
        this['action'] = action;
        return this;
    }
    public withParameters(parameters: InstanceActionParameters): InstanceAction {
        this['parameters'] = parameters;
        return this;
    }
}