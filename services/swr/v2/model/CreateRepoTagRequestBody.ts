

export class CreateRepoTagRequestBody {
    private 'source_tag'?: string;
    private 'destination_tag'?: string;
    public override?: boolean;
    public constructor(sourceTag?: string, destinationTag?: string) { 
        this['source_tag'] = sourceTag;
        this['destination_tag'] = destinationTag;
    }
    public withSourceTag(sourceTag: string): CreateRepoTagRequestBody {
        this['source_tag'] = sourceTag;
        return this;
    }
    public set sourceTag(sourceTag: string  | undefined) {
        this['source_tag'] = sourceTag;
    }
    public get sourceTag(): string | undefined {
        return this['source_tag'];
    }
    public withDestinationTag(destinationTag: string): CreateRepoTagRequestBody {
        this['destination_tag'] = destinationTag;
        return this;
    }
    public set destinationTag(destinationTag: string  | undefined) {
        this['destination_tag'] = destinationTag;
    }
    public get destinationTag(): string | undefined {
        return this['destination_tag'];
    }
    public withOverride(override: boolean): CreateRepoTagRequestBody {
        this['override'] = override;
        return this;
    }
}