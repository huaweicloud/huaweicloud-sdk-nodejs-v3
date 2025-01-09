

export class UpdateSubnetBandwidthControlListReq {
    private 'control_mode'?: UpdateSubnetBandwidthControlListReqControlModeEnum | string;
    private 'add_control_list'?: Array<string>;
    private 'remove_control_list'?: Array<string>;
    public constructor() { 
    }
    public withControlMode(controlMode: UpdateSubnetBandwidthControlListReqControlModeEnum | string): UpdateSubnetBandwidthControlListReq {
        this['control_mode'] = controlMode;
        return this;
    }
    public set controlMode(controlMode: UpdateSubnetBandwidthControlListReqControlModeEnum | string  | undefined) {
        this['control_mode'] = controlMode;
    }
    public get controlMode(): UpdateSubnetBandwidthControlListReqControlModeEnum | string | undefined {
        return this['control_mode'];
    }
    public withAddControlList(addControlList: Array<string>): UpdateSubnetBandwidthControlListReq {
        this['add_control_list'] = addControlList;
        return this;
    }
    public set addControlList(addControlList: Array<string>  | undefined) {
        this['add_control_list'] = addControlList;
    }
    public get addControlList(): Array<string> | undefined {
        return this['add_control_list'];
    }
    public withRemoveControlList(removeControlList: Array<string>): UpdateSubnetBandwidthControlListReq {
        this['remove_control_list'] = removeControlList;
        return this;
    }
    public set removeControlList(removeControlList: Array<string>  | undefined) {
        this['remove_control_list'] = removeControlList;
    }
    public get removeControlList(): Array<string> | undefined {
        return this['remove_control_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSubnetBandwidthControlListReqControlModeEnum {
    BLACK = 'BLACK',
    WHITE = 'WHITE'
}
