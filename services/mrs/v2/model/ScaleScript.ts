

export class ScaleScript {
    public name: string;
    public uri: string;
    public parameters?: string;
    public nodes: Array<string>;
    private 'active_master'?: boolean | undefined;
    private 'fail_action': ScaleScriptFailActionEnum | undefined;
    private 'action_stage': ScaleScriptActionStageEnum | undefined;
    public constructor(name?: any, uri?: any, nodes?: any, failAction?: any, actionStage?: any) { 
        this['name'] = name;
        this['uri'] = uri;
        this['nodes'] = nodes;
        this['fail_action'] = failAction;
        this['action_stage'] = actionStage;
    }
    public withName(name: string): ScaleScript {
        this['name'] = name;
        return this;
    }
    public withUri(uri: string): ScaleScript {
        this['uri'] = uri;
        return this;
    }
    public withParameters(parameters: string): ScaleScript {
        this['parameters'] = parameters;
        return this;
    }
    public withNodes(nodes: Array<string>): ScaleScript {
        this['nodes'] = nodes;
        return this;
    }
    public withActiveMaster(activeMaster: boolean): ScaleScript {
        this['active_master'] = activeMaster;
        return this;
    }
    public set activeMaster(activeMaster: boolean | undefined) {
        this['active_master'] = activeMaster;
    }
    public get activeMaster() {
        return this['active_master'];
    }
    public withFailAction(failAction: ScaleScriptFailActionEnum): ScaleScript {
        this['fail_action'] = failAction;
        return this;
    }
    public set failAction(failAction: ScaleScriptFailActionEnum | undefined) {
        this['fail_action'] = failAction;
    }
    public get failAction() {
        return this['fail_action'];
    }
    public withActionStage(actionStage: ScaleScriptActionStageEnum): ScaleScript {
        this['action_stage'] = actionStage;
        return this;
    }
    public set actionStage(actionStage: ScaleScriptActionStageEnum | undefined) {
        this['action_stage'] = actionStage;
    }
    public get actionStage() {
        return this['action_stage'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScaleScriptFailActionEnum {
    CONTINUE = 'continue',
    ERROROUT = 'errorout'
}
/**
    * @export
    * @enum {string}
    */
export enum ScaleScriptActionStageEnum {
    BEFORE_SCALE_OUT = 'before_scale_out',
    BEFORE_SCALE_IN = 'before_scale_in',
    AFTER_SCALE_OUT = 'after_scale_out',
    AFTER_SCALE_IN = 'after_scale_in'
}
