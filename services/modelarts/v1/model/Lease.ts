

export class Lease {
    private 'create_at'?: number;
    public duration?: number;
    public enable?: boolean;
    public type?: LeaseTypeEnum | string;
    private 'update_at'?: number;
    public constructor() { 
    }
    public withCreateAt(createAt: number): Lease {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withDuration(duration: number): Lease {
        this['duration'] = duration;
        return this;
    }
    public withEnable(enable: boolean): Lease {
        this['enable'] = enable;
        return this;
    }
    public withType(type: LeaseTypeEnum | string): Lease {
        this['type'] = type;
        return this;
    }
    public withUpdateAt(updateAt: number): Lease {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LeaseTypeEnum {
    TIMING = 'timing',
    IDLE = 'idle'
}
