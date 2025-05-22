

export class WorkTableIssuseListResponseBodyModule {
    public id?: number;
    public name?: string;
    private 'path_name'?: string;
    public constructor() { 
    }
    public withId(id: number): WorkTableIssuseListResponseBodyModule {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WorkTableIssuseListResponseBodyModule {
        this['name'] = name;
        return this;
    }
    public withPathName(pathName: string): WorkTableIssuseListResponseBodyModule {
        this['path_name'] = pathName;
        return this;
    }
    public set pathName(pathName: string  | undefined) {
        this['path_name'] = pathName;
    }
    public get pathName(): string | undefined {
        return this['path_name'];
    }
}