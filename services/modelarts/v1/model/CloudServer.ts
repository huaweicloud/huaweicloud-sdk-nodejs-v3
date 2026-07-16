

export class CloudServer {
    public id?: string;
    public type?: CloudServerTypeEnum | string;
    private 'hps_id'?: string;
    private 'hps_ecs_id'?: string;
    public constructor() { 
    }
    public withId(id: string): CloudServer {
        this['id'] = id;
        return this;
    }
    public withType(type: CloudServerTypeEnum | string): CloudServer {
        this['type'] = type;
        return this;
    }
    public withHpsId(hpsId: string): CloudServer {
        this['hps_id'] = hpsId;
        return this;
    }
    public set hpsId(hpsId: string  | undefined) {
        this['hps_id'] = hpsId;
    }
    public get hpsId(): string | undefined {
        return this['hps_id'];
    }
    public withHpsEcsId(hpsEcsId: string): CloudServer {
        this['hps_ecs_id'] = hpsEcsId;
        return this;
    }
    public set hpsEcsId(hpsEcsId: string  | undefined) {
        this['hps_ecs_id'] = hpsEcsId;
    }
    public get hpsEcsId(): string | undefined {
        return this['hps_ecs_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CloudServerTypeEnum {
    BMS = 'BMS',
    ECS = 'ECS',
    HPS = 'HPS'
}
