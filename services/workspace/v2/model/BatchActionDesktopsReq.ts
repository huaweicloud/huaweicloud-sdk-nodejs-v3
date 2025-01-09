

export class BatchActionDesktopsReq {
    private 'desktop_ids'?: Array<string>;
    private 'op_type'?: string;
    public type?: BatchActionDesktopsReqTypeEnum | string;
    private 'host_id'?: string;
    private 'project_id'?: string;
    public constructor(desktopIds?: Array<string>, opType?: string) { 
        this['desktop_ids'] = desktopIds;
        this['op_type'] = opType;
    }
    public withDesktopIds(desktopIds: Array<string>): BatchActionDesktopsReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withOpType(opType: string): BatchActionDesktopsReq {
        this['op_type'] = opType;
        return this;
    }
    public set opType(opType: string  | undefined) {
        this['op_type'] = opType;
    }
    public get opType(): string | undefined {
        return this['op_type'];
    }
    public withType(type: BatchActionDesktopsReqTypeEnum | string): BatchActionDesktopsReq {
        this['type'] = type;
        return this;
    }
    public withHostId(hostId: string): BatchActionDesktopsReq {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withProjectId(projectId: string): BatchActionDesktopsReq {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchActionDesktopsReqTypeEnum {
    SOFT = 'SOFT',
    HARD = 'HARD'
}
