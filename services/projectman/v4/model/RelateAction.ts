import { RelationObject } from './RelationObject';


export class RelateAction {
    public action?: string;
    private 'action_display_name'?: string;
    private 'relate_object_list'?: Array<RelationObject>;
    public constructor() { 
    }
    public withAction(action: string): RelateAction {
        this['action'] = action;
        return this;
    }
    public withActionDisplayName(actionDisplayName: string): RelateAction {
        this['action_display_name'] = actionDisplayName;
        return this;
    }
    public set actionDisplayName(actionDisplayName: string  | undefined) {
        this['action_display_name'] = actionDisplayName;
    }
    public get actionDisplayName(): string | undefined {
        return this['action_display_name'];
    }
    public withRelateObjectList(relateObjectList: Array<RelationObject>): RelateAction {
        this['relate_object_list'] = relateObjectList;
        return this;
    }
    public set relateObjectList(relateObjectList: Array<RelationObject>  | undefined) {
        this['relate_object_list'] = relateObjectList;
    }
    public get relateObjectList(): Array<RelationObject> | undefined {
        return this['relate_object_list'];
    }
}