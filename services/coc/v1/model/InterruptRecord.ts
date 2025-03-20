

export class InterruptRecord {
    public id?: string;
    public sources?: InterruptRecordSourcesEnum | string;
    private 'sources_id'?: string;
    private 'sources_name'?: string;
    public region?: string;
    private 'unavailable_start_time'?: number;
    private 'unavailable_end_time'?: number;
    public descriptions?: string;
    private 'creator_id'?: string;
    public creator?: string;
    private 'modified_id'?: string;
    private 'modified_by'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withId(id: string): InterruptRecord {
        this['id'] = id;
        return this;
    }
    public withSources(sources: InterruptRecordSourcesEnum | string): InterruptRecord {
        this['sources'] = sources;
        return this;
    }
    public withSourcesId(sourcesId: string): InterruptRecord {
        this['sources_id'] = sourcesId;
        return this;
    }
    public set sourcesId(sourcesId: string  | undefined) {
        this['sources_id'] = sourcesId;
    }
    public get sourcesId(): string | undefined {
        return this['sources_id'];
    }
    public withSourcesName(sourcesName: string): InterruptRecord {
        this['sources_name'] = sourcesName;
        return this;
    }
    public set sourcesName(sourcesName: string  | undefined) {
        this['sources_name'] = sourcesName;
    }
    public get sourcesName(): string | undefined {
        return this['sources_name'];
    }
    public withRegion(region: string): InterruptRecord {
        this['region'] = region;
        return this;
    }
    public withUnavailableStartTime(unavailableStartTime: number): InterruptRecord {
        this['unavailable_start_time'] = unavailableStartTime;
        return this;
    }
    public set unavailableStartTime(unavailableStartTime: number  | undefined) {
        this['unavailable_start_time'] = unavailableStartTime;
    }
    public get unavailableStartTime(): number | undefined {
        return this['unavailable_start_time'];
    }
    public withUnavailableEndTime(unavailableEndTime: number): InterruptRecord {
        this['unavailable_end_time'] = unavailableEndTime;
        return this;
    }
    public set unavailableEndTime(unavailableEndTime: number  | undefined) {
        this['unavailable_end_time'] = unavailableEndTime;
    }
    public get unavailableEndTime(): number | undefined {
        return this['unavailable_end_time'];
    }
    public withDescriptions(descriptions: string): InterruptRecord {
        this['descriptions'] = descriptions;
        return this;
    }
    public withCreatorId(creatorId: string): InterruptRecord {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreator(creator: string): InterruptRecord {
        this['creator'] = creator;
        return this;
    }
    public withModifiedId(modifiedId: string): InterruptRecord {
        this['modified_id'] = modifiedId;
        return this;
    }
    public set modifiedId(modifiedId: string  | undefined) {
        this['modified_id'] = modifiedId;
    }
    public get modifiedId(): string | undefined {
        return this['modified_id'];
    }
    public withModifiedBy(modifiedBy: string): InterruptRecord {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withCreateTime(createTime: number): InterruptRecord {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): InterruptRecord {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InterruptRecordSourcesEnum {
    SLI = 'SLI',
    WARROOM = 'WARROOM',
    ALERTS = 'ALERTS',
    MALFUNCTIONS = 'MALFUNCTIONS',
    OTHERS = 'OTHERS'
}
