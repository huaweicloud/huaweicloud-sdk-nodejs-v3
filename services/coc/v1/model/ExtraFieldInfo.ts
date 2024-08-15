

export class ExtraFieldInfo {
    private 'current_cloud_service_id'?: string;
    public description?: string;
    private 'level_id'?: string;
    private 'mtm_region'?: string;
    private 'mtm_type'?: string;
    private 'source_id'?: string;
    public title?: string;
    private 'is_change_event'?: boolean;
    private 'is_service_interrupt'?: boolean;
    public constructor() { 
    }
    public withCurrentCloudServiceId(currentCloudServiceId: string): ExtraFieldInfo {
        this['current_cloud_service_id'] = currentCloudServiceId;
        return this;
    }
    public set currentCloudServiceId(currentCloudServiceId: string  | undefined) {
        this['current_cloud_service_id'] = currentCloudServiceId;
    }
    public get currentCloudServiceId(): string | undefined {
        return this['current_cloud_service_id'];
    }
    public withDescription(description: string): ExtraFieldInfo {
        this['description'] = description;
        return this;
    }
    public withLevelId(levelId: string): ExtraFieldInfo {
        this['level_id'] = levelId;
        return this;
    }
    public set levelId(levelId: string  | undefined) {
        this['level_id'] = levelId;
    }
    public get levelId(): string | undefined {
        return this['level_id'];
    }
    public withMtmRegion(mtmRegion: string): ExtraFieldInfo {
        this['mtm_region'] = mtmRegion;
        return this;
    }
    public set mtmRegion(mtmRegion: string  | undefined) {
        this['mtm_region'] = mtmRegion;
    }
    public get mtmRegion(): string | undefined {
        return this['mtm_region'];
    }
    public withMtmType(mtmType: string): ExtraFieldInfo {
        this['mtm_type'] = mtmType;
        return this;
    }
    public set mtmType(mtmType: string  | undefined) {
        this['mtm_type'] = mtmType;
    }
    public get mtmType(): string | undefined {
        return this['mtm_type'];
    }
    public withSourceId(sourceId: string): ExtraFieldInfo {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withTitle(title: string): ExtraFieldInfo {
        this['title'] = title;
        return this;
    }
    public withIsChangeEvent(isChangeEvent: boolean): ExtraFieldInfo {
        this['is_change_event'] = isChangeEvent;
        return this;
    }
    public set isChangeEvent(isChangeEvent: boolean  | undefined) {
        this['is_change_event'] = isChangeEvent;
    }
    public get isChangeEvent(): boolean | undefined {
        return this['is_change_event'];
    }
    public withIsServiceInterrupt(isServiceInterrupt: boolean): ExtraFieldInfo {
        this['is_service_interrupt'] = isServiceInterrupt;
        return this;
    }
    public set isServiceInterrupt(isServiceInterrupt: boolean  | undefined) {
        this['is_service_interrupt'] = isServiceInterrupt;
    }
    public get isServiceInterrupt(): boolean | undefined {
        return this['is_service_interrupt'];
    }
}