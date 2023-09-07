

export class ModifyStartPositionReq {
    private 'file_and_position'?: string;
    private 'gtid_set'?: string;
    public constructor(fileAndPosition?: string) { 
        this['file_and_position'] = fileAndPosition;
    }
    public withFileAndPosition(fileAndPosition: string): ModifyStartPositionReq {
        this['file_and_position'] = fileAndPosition;
        return this;
    }
    public set fileAndPosition(fileAndPosition: string  | undefined) {
        this['file_and_position'] = fileAndPosition;
    }
    public get fileAndPosition(): string | undefined {
        return this['file_and_position'];
    }
    public withGtidSet(gtidSet: string): ModifyStartPositionReq {
        this['gtid_set'] = gtidSet;
        return this;
    }
    public set gtidSet(gtidSet: string  | undefined) {
        this['gtid_set'] = gtidSet;
    }
    public get gtidSet(): string | undefined {
        return this['gtid_set'];
    }
}