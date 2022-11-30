

export class ShowNamespace {
    public id: number;
    public name: string;
    private 'creator_name': string | undefined;
    public auth: ShowNamespaceAuthEnum;
    public constructor(id?: any, name?: any, creatorName?: any, auth?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['creator_name'] = creatorName;
        this['auth'] = auth;
    }
    public withId(id: number): ShowNamespace {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowNamespace {
        this['name'] = name;
        return this;
    }
    public withCreatorName(creatorName: string): ShowNamespace {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName() {
        return this['creator_name'];
    }
    public withAuth(auth: ShowNamespaceAuthEnum): ShowNamespace {
        this['auth'] = auth;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowNamespaceAuthEnum {
    NUMBER_7 = 7,
    NUMBER_3 = 3,
    NUMBER_1 = 1
}
