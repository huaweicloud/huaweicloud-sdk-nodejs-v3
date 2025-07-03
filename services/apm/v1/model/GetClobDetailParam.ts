

export class GetClobDetailParam {
    private 'env_id'?: number;
    private 'clob_id'?: string;
    public constructor(envId?: number, clobId?: string) { 
        this['env_id'] = envId;
        this['clob_id'] = clobId;
    }
    public withEnvId(envId: number): GetClobDetailParam {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: number  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): number | undefined {
        return this['env_id'];
    }
    public withClobId(clobId: string): GetClobDetailParam {
        this['clob_id'] = clobId;
        return this;
    }
    public set clobId(clobId: string  | undefined) {
        this['clob_id'] = clobId;
    }
    public get clobId(): string | undefined {
        return this['clob_id'];
    }
}