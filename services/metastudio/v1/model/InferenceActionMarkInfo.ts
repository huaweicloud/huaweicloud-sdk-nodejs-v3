import { ActionMarkItem } from './ActionMarkItem';


export class InferenceActionMarkInfo {
    private 'action_info'?: Array<ActionMarkItem>;
    public constructor() { 
    }
    public withActionInfo(actionInfo: Array<ActionMarkItem>): InferenceActionMarkInfo {
        this['action_info'] = actionInfo;
        return this;
    }
    public set actionInfo(actionInfo: Array<ActionMarkItem>  | undefined) {
        this['action_info'] = actionInfo;
    }
    public get actionInfo(): Array<ActionMarkItem> | undefined {
        return this['action_info'];
    }
}