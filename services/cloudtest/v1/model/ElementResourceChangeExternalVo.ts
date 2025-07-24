

export class ElementResourceChangeExternalVo {
    private 'tracker_name'?: string;
    public value?: string;
    public key?: string;
    private 'object_value'?: object;
    private 'object_key'?: object;
    private 'tracker_names'?: object;
    private 'board_info'?: Array<object>;
    public constructor() { 
    }
    public withTrackerName(trackerName: string): ElementResourceChangeExternalVo {
        this['tracker_name'] = trackerName;
        return this;
    }
    public set trackerName(trackerName: string  | undefined) {
        this['tracker_name'] = trackerName;
    }
    public get trackerName(): string | undefined {
        return this['tracker_name'];
    }
    public withValue(value: string): ElementResourceChangeExternalVo {
        this['value'] = value;
        return this;
    }
    public withKey(key: string): ElementResourceChangeExternalVo {
        this['key'] = key;
        return this;
    }
    public withObjectValue(objectValue: object): ElementResourceChangeExternalVo {
        this['object_value'] = objectValue;
        return this;
    }
    public set objectValue(objectValue: object  | undefined) {
        this['object_value'] = objectValue;
    }
    public get objectValue(): object | undefined {
        return this['object_value'];
    }
    public withObjectKey(objectKey: object): ElementResourceChangeExternalVo {
        this['object_key'] = objectKey;
        return this;
    }
    public set objectKey(objectKey: object  | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey(): object | undefined {
        return this['object_key'];
    }
    public withTrackerNames(trackerNames: object): ElementResourceChangeExternalVo {
        this['tracker_names'] = trackerNames;
        return this;
    }
    public set trackerNames(trackerNames: object  | undefined) {
        this['tracker_names'] = trackerNames;
    }
    public get trackerNames(): object | undefined {
        return this['tracker_names'];
    }
    public withBoardInfo(boardInfo: Array<object>): ElementResourceChangeExternalVo {
        this['board_info'] = boardInfo;
        return this;
    }
    public set boardInfo(boardInfo: Array<object>  | undefined) {
        this['board_info'] = boardInfo;
    }
    public get boardInfo(): Array<object> | undefined {
        return this['board_info'];
    }
}