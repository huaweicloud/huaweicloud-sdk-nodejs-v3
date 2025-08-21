

export class TreeObjectDto {
    public id?: string;
    public name?: string;
    public type?: string;
    public path?: string;
    public mode?: string;
    private 'submodule_link'?: string;
    private 'submodule_branch'?: string;
    public md5?: string;
    public constructor() { 
    }
    public withId(id: string): TreeObjectDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TreeObjectDto {
        this['name'] = name;
        return this;
    }
    public withType(type: string): TreeObjectDto {
        this['type'] = type;
        return this;
    }
    public withPath(path: string): TreeObjectDto {
        this['path'] = path;
        return this;
    }
    public withMode(mode: string): TreeObjectDto {
        this['mode'] = mode;
        return this;
    }
    public withSubmoduleLink(submoduleLink: string): TreeObjectDto {
        this['submodule_link'] = submoduleLink;
        return this;
    }
    public set submoduleLink(submoduleLink: string  | undefined) {
        this['submodule_link'] = submoduleLink;
    }
    public get submoduleLink(): string | undefined {
        return this['submodule_link'];
    }
    public withSubmoduleBranch(submoduleBranch: string): TreeObjectDto {
        this['submodule_branch'] = submoduleBranch;
        return this;
    }
    public set submoduleBranch(submoduleBranch: string  | undefined) {
        this['submodule_branch'] = submoduleBranch;
    }
    public get submoduleBranch(): string | undefined {
        return this['submodule_branch'];
    }
    public withMd5(md5: string): TreeObjectDto {
        this['md5'] = md5;
        return this;
    }
}