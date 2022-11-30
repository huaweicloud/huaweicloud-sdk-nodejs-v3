

export class AutoClassificationRequestBody {
    public image?: string;
    public url?: string;
    private 'type_list'?: Array<string> | undefined;
    public constructor() { 
    }
    public withImage(image: string): AutoClassificationRequestBody {
        this['image'] = image;
        return this;
    }
    public withUrl(url: string): AutoClassificationRequestBody {
        this['url'] = url;
        return this;
    }
    public withTypeList(typeList: Array<string>): AutoClassificationRequestBody {
        this['type_list'] = typeList;
        return this;
    }
    public set typeList(typeList: Array<string> | undefined) {
        this['type_list'] = typeList;
    }
    public get typeList() {
        return this['type_list'];
    }
}