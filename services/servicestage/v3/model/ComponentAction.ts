import { ComponentActionParameters } from './ComponentActionParameters';
import { ComponentActionType } from './ComponentActionType';


export class ComponentAction {
    public action?: ComponentActionType;
    public parameters?: ComponentActionParameters;
    public constructor(action?: ComponentActionType) { 
        this['action'] = action;
    }
    public withAction(action: ComponentActionType): ComponentAction {
        this['action'] = action;
        return this;
    }
    public withParameters(parameters: ComponentActionParameters): ComponentAction {
        this['parameters'] = parameters;
        return this;
    }
}