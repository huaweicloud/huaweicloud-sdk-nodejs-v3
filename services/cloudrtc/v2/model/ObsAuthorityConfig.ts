

export class ObsAuthorityConfig {
    public bucket?: string;
    public operation?: number;
    public location?: ObsAuthorityConfigLocationEnum | string;
    private 'project_id'?: string;
    public constructor(bucket?: string, operation?: number, location?: string) { 
        this['bucket'] = bucket;
        this['operation'] = operation;
        this['location'] = location;
    }
    public withBucket(bucket: string): ObsAuthorityConfig {
        this['bucket'] = bucket;
        return this;
    }
    public withOperation(operation: number): ObsAuthorityConfig {
        this['operation'] = operation;
        return this;
    }
    public withLocation(location: ObsAuthorityConfigLocationEnum | string): ObsAuthorityConfig {
        this['location'] = location;
        return this;
    }
    public withProjectId(projectId: string): ObsAuthorityConfig {
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
export enum ObsAuthorityConfigLocationEnum {
    CN_NORTH_4 = 'cn-north-4',
    CN_NORTH_1 = 'cn-north-1',
    CN_NORTH_5 = 'cn-north-5',
    CN_NORTH_6 = 'cn-north-6',
    CN_SOUTH_1 = 'cn-south-1',
    CN_EAST_2 = 'cn-east-2'
}
