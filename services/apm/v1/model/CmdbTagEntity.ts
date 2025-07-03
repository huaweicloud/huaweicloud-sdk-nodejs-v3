

export class CmdbTagEntity {
    public name?: string;
    private 'business_id'?: number;
    public uuid?: string;
    public descp?: string;
    private 'creator_id'?: number;
    private 'env_id_list'?: Array<number>;
    public id?: number;
    private 'gmt_create'?: string;
    private 'gmt_modify'?: string;
    public constructor() { 
    }
    public withName(name: string): CmdbTagEntity {
        this['name'] = name;
        return this;
    }
    public withBusinessId(businessId: number): CmdbTagEntity {
        this['business_id'] = businessId;
        return this;
    }
    public set businessId(businessId: number  | undefined) {
        this['business_id'] = businessId;
    }
    public get businessId(): number | undefined {
        return this['business_id'];
    }
    public withUuid(uuid: string): CmdbTagEntity {
        this['uuid'] = uuid;
        return this;
    }
    public withDescp(descp: string): CmdbTagEntity {
        this['descp'] = descp;
        return this;
    }
    public withCreatorId(creatorId: number): CmdbTagEntity {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: number  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): number | undefined {
        return this['creator_id'];
    }
    public withEnvIdList(envIdList: Array<number>): CmdbTagEntity {
        this['env_id_list'] = envIdList;
        return this;
    }
    public set envIdList(envIdList: Array<number>  | undefined) {
        this['env_id_list'] = envIdList;
    }
    public get envIdList(): Array<number> | undefined {
        return this['env_id_list'];
    }
    public withId(id: number): CmdbTagEntity {
        this['id'] = id;
        return this;
    }
    public withGmtCreate(gmtCreate: string): CmdbTagEntity {
        this['gmt_create'] = gmtCreate;
        return this;
    }
    public set gmtCreate(gmtCreate: string  | undefined) {
        this['gmt_create'] = gmtCreate;
    }
    public get gmtCreate(): string | undefined {
        return this['gmt_create'];
    }
    public withGmtModify(gmtModify: string): CmdbTagEntity {
        this['gmt_modify'] = gmtModify;
        return this;
    }
    public set gmtModify(gmtModify: string  | undefined) {
        this['gmt_modify'] = gmtModify;
    }
    public get gmtModify(): string | undefined {
        return this['gmt_modify'];
    }
}