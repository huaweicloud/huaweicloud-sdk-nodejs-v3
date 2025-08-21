

export class TreeDto {
    public id?: string;
    public name?: string;
    public type?: TreeDtoTypeEnum | string;
    public path?: string;
    public level?: number;
    public isShownDropDown?: boolean;
    public folder?: boolean;
    public children?: Array<TreeDto>;
    private 'submodule_link'?: string;
    public constructor() { 
    }
    public withId(id: string): TreeDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TreeDto {
        this['name'] = name;
        return this;
    }
    public withType(type: TreeDtoTypeEnum | string): TreeDto {
        this['type'] = type;
        return this;
    }
    public withPath(path: string): TreeDto {
        this['path'] = path;
        return this;
    }
    public withLevel(level: number): TreeDto {
        this['level'] = level;
        return this;
    }
    public withIsShownDropDown(isShownDropDown: boolean): TreeDto {
        this['isShownDropDown'] = isShownDropDown;
        return this;
    }
    public withFolder(folder: boolean): TreeDto {
        this['folder'] = folder;
        return this;
    }
    public withChildren(children: Array<TreeDto>): TreeDto {
        this['children'] = children;
        return this;
    }
    public withSubmoduleLink(submoduleLink: string): TreeDto {
        this['submodule_link'] = submoduleLink;
        return this;
    }
    public set submoduleLink(submoduleLink: string  | undefined) {
        this['submodule_link'] = submoduleLink;
    }
    public get submoduleLink(): string | undefined {
        return this['submodule_link'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TreeDtoTypeEnum {
    COMMIT = 'commit',
    TREE = 'tree',
    BLOB = 'blob'
}
