

export class QueryIaConfigResponseDTO {
    public id?: string;
    public name?: string;
    public value?: string;
    public description?: string;
    public version?: number;
    public state?: QueryIaConfigResponseDTOStateEnum | string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): QueryIaConfigResponseDTO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): QueryIaConfigResponseDTO {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): QueryIaConfigResponseDTO {
        this['value'] = value;
        return this;
    }
    public withDescription(description: string): QueryIaConfigResponseDTO {
        this['description'] = description;
        return this;
    }
    public withVersion(version: number): QueryIaConfigResponseDTO {
        this['version'] = version;
        return this;
    }
    public withState(state: QueryIaConfigResponseDTOStateEnum | string): QueryIaConfigResponseDTO {
        this['state'] = state;
        return this;
    }
    public withCreateTime(createTime: string): QueryIaConfigResponseDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): QueryIaConfigResponseDTO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum QueryIaConfigResponseDTOStateEnum {
    SUCCESS = 'SUCCESS',
    SENDING = 'SENDING'
}
