

export class ShowRepositoryE2eSettingRequest {
    private 'repository_id'?: number;
    private 'take_effect'?: boolean;
    public constructor(repositoryId?: number) { 
        this['repository_id'] = repositoryId;
    }
    public withRepositoryId(repositoryId: number): ShowRepositoryE2eSettingRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withTakeEffect(takeEffect: boolean): ShowRepositoryE2eSettingRequest {
        this['take_effect'] = takeEffect;
        return this;
    }
    public set takeEffect(takeEffect: boolean  | undefined) {
        this['take_effect'] = takeEffect;
    }
    public get takeEffect(): boolean | undefined {
        return this['take_effect'];
    }
}