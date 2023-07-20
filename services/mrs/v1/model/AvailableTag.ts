

export class AvailableTag {
    public mode?: string;
    public alias?: string;
    private 'public_border_group'?: string;
    public constructor() { 
    }
    public withMode(mode: string): AvailableTag {
        this['mode'] = mode;
        return this;
    }
    public withAlias(alias: string): AvailableTag {
        this['alias'] = alias;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): AvailableTag {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
}