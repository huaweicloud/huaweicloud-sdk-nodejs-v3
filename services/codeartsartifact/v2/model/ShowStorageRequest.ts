

export class ShowStorageRequest {
    private 'format_list'?: string;
    private 'in_project'?: string;
    public constructor() { 
    }
    public withFormatList(formatList: string): ShowStorageRequest {
        this['format_list'] = formatList;
        return this;
    }
    public set formatList(formatList: string  | undefined) {
        this['format_list'] = formatList;
    }
    public get formatList(): string | undefined {
        return this['format_list'];
    }
    public withInProject(inProject: string): ShowStorageRequest {
        this['in_project'] = inProject;
        return this;
    }
    public set inProject(inProject: string  | undefined) {
        this['in_project'] = inProject;
    }
    public get inProject(): string | undefined {
        return this['in_project'];
    }
}