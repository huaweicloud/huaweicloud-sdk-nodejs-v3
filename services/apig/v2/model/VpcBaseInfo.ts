

export class VpcBaseInfo {
    private 'ecs_id'?: string;
    private 'ecs_name'?: string;
    private 'cascade_flag'?: boolean;
    public constructor() { 
    }
    public withEcsId(ecsId: string): VpcBaseInfo {
        this['ecs_id'] = ecsId;
        return this;
    }
    public set ecsId(ecsId: string  | undefined) {
        this['ecs_id'] = ecsId;
    }
    public get ecsId(): string | undefined {
        return this['ecs_id'];
    }
    public withEcsName(ecsName: string): VpcBaseInfo {
        this['ecs_name'] = ecsName;
        return this;
    }
    public set ecsName(ecsName: string  | undefined) {
        this['ecs_name'] = ecsName;
    }
    public get ecsName(): string | undefined {
        return this['ecs_name'];
    }
    public withCascadeFlag(cascadeFlag: boolean): VpcBaseInfo {
        this['cascade_flag'] = cascadeFlag;
        return this;
    }
    public set cascadeFlag(cascadeFlag: boolean  | undefined) {
        this['cascade_flag'] = cascadeFlag;
    }
    public get cascadeFlag(): boolean | undefined {
        return this['cascade_flag'];
    }
}